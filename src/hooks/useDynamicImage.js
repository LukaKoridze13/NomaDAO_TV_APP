import { useState, useEffect } from "react";

const useDynamicImage = (imageName, extension='png') => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../assets/images/${imageName}.${extension}`);
        setImageSrc(image.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [imageName, extension]);

  return imageSrc;
};

export default useDynamicImage;
