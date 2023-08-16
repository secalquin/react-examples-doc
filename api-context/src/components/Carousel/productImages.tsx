import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ProductImageCarouselProps {
  images: string[];
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({
  images,
}) => {
  return (
    <Carousel animationHandler={"slide"}>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductImageCarousel;
