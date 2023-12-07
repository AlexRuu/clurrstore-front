import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Button from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProductImageSlideProps {
  images: ImageType[];
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  setTranslateAmount: Dispatch<SetStateAction<number>>;
  translateAmount: number;
}

const ProductImageSlide: React.FC<ProductImageSlideProps> = ({
  images,
  selectedIndex,
  setSelectedIndex,
  translateAmount,
  setTranslateAmount,
}) => {
  const translateStyle: React.CSSProperties = {
    transform: `translateY(${translateAmount}px)`,
    transition: "transform 0.5s ease",
  };

  const translateUp = () => {
    const sliderWrapper = document.getElementById(
      "image-slider-wrapper"
    )!.clientHeight;
    const remaining = sliderWrapper - 335;
    if (remaining < 335) {
      return setTranslateAmount(0);
    }
    setTranslateAmount(translateAmount + 335);
  };

  const translateDown = () => {
    const sliderWrapper = document.getElementById(
      "image-slider-wrapper"
    )!.clientHeight;
    const remaining = sliderWrapper - 335;
    if (sliderWrapper > 335 && remaining < 335) {
      return setTranslateAmount(-remaining);
    }
    setTranslateAmount(translateAmount - 335);
  };
  return (
    <div className="items-center md:flex flex-col flex-nowrap flex-shrink-0 h-full w-[80px] hidden">
      {images.length > 4 && (
        <Button
          className="rounded-none text-center p-0 m-0 w-full"
          onClick={translateUp}
        >
          <ChevronUp size={50} className="text-neutral-500 p-0 m-0 w-full" />
        </Button>
      )}
      <div className="h-full max-h-[335px] overflow-hidden w-full [transition:max-height_1s] ease-out">
        <div
          id="image-slider-wrapper"
          className="flex flex-col flex-nowrap w-full"
          style={translateStyle}
        >
          {images.map((img, index) => (
            <Image
              key={img.id}
              height={80}
              width={80}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "mt-0 mx-0 mb-1 select-none w-full cursor-pointer",
                index == selectedIndex ? "border-black border-solid border" : ""
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={img.url}
              alt={`${index} out of ${images.length}`}
            />
          ))}
        </div>
      </div>
      {images.length > 4 && (
        <Button
          className="rounded-none text-center p-0 m-0 w-full"
          onClick={translateDown}
        >
          <ChevronDown size={50} className="text-neutral-500 p-0 m-0 w-full" />
        </Button>
      )}
    </div>
  );
};

export default ProductImageSlide;
