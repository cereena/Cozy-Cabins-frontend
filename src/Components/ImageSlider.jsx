import { useState, useEffect } from "react";
import house1 from "../assets/rent5.jpg";
import house2 from "../assets/rent2.jpg";
import house3 from "../assets/rent3.jpg";
import house4 from "../assets/rent6.jpg";

const images = [house1, house2, house3,house4];

function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <img
      src={images[index]}
      alt="House"
      style={{
        width: "100%",
        height: "auto",
        transition: "opacity 1s ease-in-out"
      }}
    />
  );
}

export default ImageSlider;
