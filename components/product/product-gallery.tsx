"use client";

import { useState } from "react";
import { Image } from "@/types";

import ProductGalleryImage from "./product-gallery-image";
import ProductImageSlide from "./product-image-slide";

interface ProductGalleryProps {
  images: Image[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [translateAmount, setTranslateAmount] = useState(0);

  return (
    <div className="md:max-w-[600px] flex flex-nowrap flex-row flex-shrink overflow-hidden w-full">
      <ProductImageSlide
        images={images}
        translateAmount={translateAmount}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setTranslateAmount={setTranslateAmount}
      />

      <div className="md:flex-shrink md:h-full left-0 py-0 px-5 relative w-full top-0 z-0">
        <ProductGalleryImage images={images} selectedIndex={selectedIndex} />
      </div>
    </div>
  );
};

export default ProductGallery;
