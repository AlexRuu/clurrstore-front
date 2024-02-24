"use client";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

import { useState } from "react";

interface PreviewGalleryProps {
  images: ImageType[];
  selectedIndex: number;
}

const ProductGalleryImage: React.FC<PreviewGalleryProps> = ({
  images,
  selectedIndex,
}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const image = e.currentTarget.getBoundingClientRect();
    const width = e.currentTarget.offsetWidth;
    const height = e.currentTarget.offsetHeight;

    const xLocation = e.clientX - image.left;
    const yLocation = e.clientY - image.top;

    setX(-((xLocation - width) / width / 4) * 100);
    setY(-((yLocation - height) / height / 4) * 100);
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };

  const translateStyle: React.CSSProperties = {
    zIndex: "2",
    transform: `translate(${x}%, ${y}%)`,
    scale: "2",
    transition: "opacity 0.2s ease",
  };

  return (
    <div className="h-full left-0 overflow-hidden relative top-0 w-full">
      <AspectRatio ratio={6 / 6}>
        <Image
          height={600}
          width={600}
          alt=""
          loading="lazy"
          src={images[0].url}
          className="invisible rounded-[30px]"
        />
      </AspectRatio>
      {images.map((img, index) => (
        <div
          key={img.id}
          className={cn(
            "left-0 absolute top-0 w-full opacity-0 z-0 overflow-hidden [transition:transform_0.5s,opacity_0.1s] ease-in rounded-[30px]",
            index > selectedIndex ? "translate-x-full" : "-translate-x-full",
            index === selectedIndex ? "opacity-100 z-[5] translate-x-0" : ""
          )}
        >
          <Image
            height={600}
            width={600}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 opacity-0 top-0 hover:opacity-100 rounded-[30px]"
            style={translateStyle}
            src={img.url}
            sizes="(max-width: 500px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            alt={`${index} out of ${images.length} images`}
          />
          <Image
            height={600}
            width={600}
            className="m-0 p-0 relative flex justify-center z-0 hover:opacity-0 rounded-[30px]"
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
