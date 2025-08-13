import { useState } from "react";

export default function ImagenSuave({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-contain rounded-lg transition-all duration-700 ease-in-out
          ${loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"}
        `}
      />
   
  );
}
