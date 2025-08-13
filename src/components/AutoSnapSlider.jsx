import React, { useRef, useEffect } from "react";
import ImagenSuave from "./ImagenSuave";



export default function AutoSnapSlider({directionSlider,images}) {
  const sliderRef = useRef(null);

  // Configuración: "right" o "left"
  const direction = directionSlider; 
  const speed = 0.5; // píxeles por frame

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId;
    const totalWidth = slider.scrollWidth / 2; // porque duplicamos imágenes

    const scroll = () => {
      if (direction === "right") {
        slider.scrollLeft += speed;
        if (slider.scrollLeft >= totalWidth) {
          slider.scrollLeft = 0;
        }
      } else {
        slider.scrollLeft -= speed;
        if (slider.scrollLeft <= 0) {
          slider.scrollLeft = totalWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, speed]);

  return (
    <div className="relative w-full p-2 rounded-md overflow-hidden">
      {/* Fade izquierdo */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-15 bg-gradient-to-r from-white/20 to-transparent mix-blend-overlay z-10" />

      {/* Fade derecho */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-15 bg-gradient-to-l from-white/20 to-transparent mix-blend-overlay z-10" />

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto no-scrollbar slider-mask"
        style={{ scrollBehavior: "auto" }} // quita smooth para fluidez
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-fit h-40 p-2"
          >
            <ImagenSuave
              src={src}
              alt=""
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
