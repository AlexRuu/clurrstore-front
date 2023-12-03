"use client";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import Image from "next/image";

import { wrap } from "popmotion";

interface PreviewGalleryProps {
  images: ImageType[];
  selectedIndex: number;
}

const ProductGalleryImage: React.FC<PreviewGalleryProps> = ({
  images,
  selectedIndex,
}) => {
  return (
    <div className="h-full left-0 overflow-hidden relative top-0 w-full">
      <Image
        height={500}
        width={500}
        alt=""
        src={images[0].url}
        loading="lazy"
        className="invisible"
      />
      {images.map((img, index) => (
        <div
          key={img.id}
          className={cn(
            "h-full left-0 absolute top-0 w-full opacity-0 z-0 overflow-hidden [transition:transform_0.5s,opacity_0.1s] ease-[ease]",
            index > selectedIndex ? "translate-x-full" : "-translate-x-full",
            index === selectedIndex ? "opacity-100 z-[5] translate-x-0" : ""
          )}
        >
          <Image
            height={500}
            width={500}
            className="relative flex justify-center z-0"
            src={img.url}
            sizes="(max-width: 500px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            alt={`${index} out of ${images.length} images`}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGalleryImage;
