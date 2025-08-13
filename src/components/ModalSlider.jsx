import React, { useState, useRef,useEffect } from "react";
import ImagenSuave from "./ImagenSuave";
export default function ModalSlider({ isOpen, images,recibirDato }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbRef = useRef(null);
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const scrollThumbs = (direction) => {
    if (!thumbRef.current) return;
    const scrollAmount = 80; // ancho aproximado de cada miniatura
    thumbRef.current.scrollBy({
      left: direction === "right" ? scrollAmount * 2 : -scrollAmount * 2,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const activeThumb = document.querySelector(".border-blue-500");
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [currentIndex]);

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 ">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <button
              onClick={ ()=>recibirDato(false)}
              className="absolute z-60 top-4 right-4 bg-white text-purple-500 w-10 h-10  flex items-center justify-center text-3xl rounded-full text-center leading-none"
            >
              &times;
            </button>

            {/* Slider principal */}
            <div className="relative flex items-center justify-center">
              <button
                onClick={prevSlide}
                className="absolute left-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80"
              >
                &#10094;
              </button>

              <ImagenSuave
                src={images[currentIndex]}
                alt={`img-${currentIndex}`}
                className="max-h-[70vh] object-contain rounded-lg"
              />

              <button
                onClick={nextSlide}
                className="absolute right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80"
              >
                &#10095;
              </button>
            </div>

            {/* Mini-slider */}
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => scrollThumbs("left")}
                className="bg-black/50 text-white p-1 rounded hover:bg-black/80"
              >
                &#10094;
              </button>

              <div
                ref={thumbRef}
                className="flex overflow-x-auto gap-2 no-scrollbar"
              >
                // Dentro del map de miniaturas
                {images.map((src, idx) => {
                  const thumbRefItem = React.createRef(); // ref para esta miniatura
                  return (
                    <img
                      key={idx}
                      src={src}
                      loading="lazy"
                      alt={`thumb-${idx}`}
                      ref={idx === currentIndex ? thumbRefItem : null} // solo la activa
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                        idx === currentIndex
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                    />
                  );
                })}
              </div>

              <button
                onClick={() => scrollThumbs("right")}
                className="bg-black/50 text-white p-1 rounded hover:bg-black/80"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
