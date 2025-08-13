import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 100 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, speed + Math.random() * 50); // pequeño random para naturalidad

    return () => clearInterval(interval);
  }, [index, text, speed]);

  return (
    <h1 className="text-xl font-fm-fascinate font-bold text-white lg:text-3xl">
      {text.slice(0, index)}
      <span className="animate-blink text-purple-600 transition-all ease-out duration-200">
        |
      </span>
    </h1>
  );
}
