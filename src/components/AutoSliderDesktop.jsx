import React, { useRef, useEffect } from "react";
import ImagenSuave from "./ImagenSuave";

export default function AutoSnapSliderDesktop({ directionSlider, images }) {
  const sliderRef = useRef(null);

  // "down" o "up"
  const direction = directionSlider;
  const speed = 0.5; // píxeles por frame

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId;
    const totalHeight = slider.scrollHeight / 2; // duplicamos imágenes

    const scroll = () => {
      if (direction === "down") {
        slider.scrollTop += speed;
        if (slider.scrollTop >= totalHeight) {
          slider.scrollTop = 0;
        }
      } else {
        slider.scrollTop -= speed;
        if (slider.scrollTop <= 0) {
          slider.scrollTop = totalHeight;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, speed]);

  return (
    <div className="relative w-full p-2 rounded-md overflow-hidden">
      {/* Fade arriba */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/20 to-transparent mix-blend-overlay z-80" />

      {/* Fade abajo */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/20 to-transparent mix-blend-overlay z-80" />

      {/* Slider vertical */}
      <div
        ref={sliderRef}
        className="flex flex-col overflow-y-auto no-scrollbar slider-mask-desktop items-center h-[700px]"
        style={{ scrollBehavior: "auto" }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="flex-shrink-0 h-50 w-fit p-2 ">
            <ImagenSuave src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
