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
    <div className="md:max-w-[700px] flex flex-nowrap flex-row flex-shrink overflow-hidden w-full ml-20 mr-10 lg:mx-10">
      <ProductImageSlide
        images={images}
        translateAmount={translateAmount}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setTranslateAmount={setTranslateAmount}
      />
      <div className="md:flex-shrink md:h-full left-0 p-[0_20px] relative w-full top-0 z-0 select-none small:hidden">
        <ProductGalleryImage images={images} selectedIndex={selectedIndex} />
      </div>
    </div>
  );
};

export default ProductGallery;
