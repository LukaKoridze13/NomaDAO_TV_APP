import { useState, useEffect } from "react";

const useDynamicImage = (imageName) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../assets/images/${imageName}.png`);
        setImageSrc(image.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [imageName]);

  return imageSrc;
};

export default useDynamicImage;
