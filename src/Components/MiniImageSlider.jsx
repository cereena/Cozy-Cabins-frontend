import { useState, useEffect } from "react";

export default function MiniImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 2000); // change every 2 sec

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <img
      src={images[index]}
      alt="Property"
      style={{ height: 240, width: "100%", objectFit: "cover" }}
    />
  );
}
