"use client";

import { cn } from "@/libs/utlils";
import { Image as ImageType } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface MobileGalleryProps {
  images: ImageType[];
}

const MobileGallery: React.FC<MobileGalleryProps> = ({ images }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [xDirection, setXDirection] = useState<number>(0);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const minimumSwipe = 50;

  const paginateNext = () => {
    const nextIndex = carouselIndex + 1;
    if (nextIndex > images.length - 1) {
      return setCarouselIndex(0);
    }
    setCarouselIndex(nextIndex);
  };

  const paginateLast = () => {
    const lastIndex = carouselIndex - 1;
    if (lastIndex < 0) {
      return setCarouselIndex(images.length - 1);
    }
    setCarouselIndex(lastIndex);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    e.stopPropagation();
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    e.stopPropagation();
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    e.stopPropagation();

    if (!touchEnd.current || !touchStart.current) return;
    const swipeDistance = touchStart.current - touchEnd.current;
    if (swipeDistance > minimumSwipe) {
      paginateNext();
    } else if (swipeDistance < minimumSwipe) {
      paginateLast();
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setPressed(true);
    const container = e.currentTarget.getBoundingClientRect();
    setXDirection(e.clientX - container.left);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!pressed) {
      return;
    }
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setPressed(false);

    const container = e.currentTarget.getBoundingClientRect();
    const location = e.clientX - container.left;
    if (location == xDirection) {
      return;
    }
    if (location > xDirection) {
      paginateLast();
    }
    if (location < xDirection) {
      paginateNext();
    }
    setXDirection(0);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (!pressed) {
      return;
    }
    handleMouseUp(e);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth - 40);
  }, []);

  useEffect(() => {
    const handleScreenWidth = () => {
      setScreenWidth(window.innerWidth - 40);
    };
    window.addEventListener("resize", handleScreenWidth);
    return () => window.removeEventListener("resize", handleScreenWidth);
  }, []);

  return (
    <div className="hidden small:block w-full mb-8 -pt-1">
      <div className="block box-border">
        <div
          style={{ height: `${screenWidth}px` }}
          aria-live="polite"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onMouseDownCapture={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="relative block m-0 p-0 overflow-hidden rounded-[30px]"
        >
          <div
            style={{ width: `${screenWidth * images.length}px` }}
            className="opacity-100 mx-auto rounded-[30px]"
          >
            {images.map((img, index) => (
              <div
                key={img.id}
                style={{ width: `${screenWidth}px` }}
                className={cn(
                  "h-full left-0 absolute top-0 z-0 overflow-hidden [transition:transform_0.5s,opacity_0.1s] ease-in",
                  index > carouselIndex
                    ? "translate-x-full"
                    : "-translate-x-full",
                  index === carouselIndex && "z-[5] translate-x-0"
                )}
              >
                <Image
                  height={screenWidth}
                  width={screenWidth}
                  className="absolute left-0 opacity-0 top-0 rounded-[30px]"
                  src={img.url}
                  sizes="(max-width: 500px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  alt={`${index} out of ${images.length} images`}
                />
                <Image
                  height={screenWidth}
                  width={screenWidth}
                  className="m-0 p-0 relative flex justify-center z-0 rounded-[30px]"
                  src={img.url}
                  sizes="(max-width: 500px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  alt={`${index} out of ${images.length} images`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative p-[0_30px] block box-border">
          <div className="static block list-none -b-[30px] w-full p-0 m-0 text-center">
            <button
              aria-label="Previous"
              onClick={paginateLast}
              className="left-0 -top-1 transform-none min-w-0 m-0 block absolute w-11 h-11 p-0 outline-none shadow-none bg-transparent cursor-pointer"
            >
              <ChevronLeft />
            </button>
            <ul className="static w-[calc(100%-100px)] m-[0px_auto] block list-none text-center p-0">
              {images.map((img, index) => (
                <li
                  key={index}
                  className="inline-block m-[0_8px] p-0 list-none"
                >
                  <button
                    role="button"
                    type="button"
                    tabIndex={index}
                    onClick={() => setCarouselIndex(index)}
                    className={cn(
                      "text-transparent transition-all border-solid border-2 h-[6px] w-[6px] min-w-0 shadow-none rounded-md text-[0px] cursor-pointer",
                      index == carouselIndex
                        ? "bg-white border-[#333333] border-opacity-30 h-[10px] w-[10px]"
                        : "bg-[#33333380] border-transparent"
                    )}
                  ></button>
                </li>
              ))}
            </ul>
            <button
              aria-label="Next"
              onClick={paginateNext}
              className="-right-[23px] -top-1 transform-none min-w-0 block m-0 absolute w-11 h-11 p-0 outline-none shadow-none bg-transparent cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileGallery;
