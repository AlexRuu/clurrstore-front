import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface ProductImageSlideProps {
  images: ImageType[];
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
}

const ProductImageSlide: React.FC<ProductImageSlideProps> = ({
  images,
  selectedIndex,
  setSelectedIndex,
}) => {
  return (
    <div className="h-full max-h-[315px] overflow-hidden w-full">
      <div className="flex flex-col flex-nowrap w-full">
        {images.map((img, index) => (
          <Image
            key={img.id}
            height={60}
            width={60}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "mt-0 mx-0 mb-1 select-none w-full h-auto",
              index == selectedIndex ? "border-black border-solid border" : ""
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={img.url}
            alt={`${index} out of ${images.length}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlide;
