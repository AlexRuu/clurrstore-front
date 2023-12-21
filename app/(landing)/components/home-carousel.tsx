"use client";
import { HomeImage } from "@/types";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";

interface HomeCarouselProps {
  homeImages: HomeImage[];
}

const centerButtons = [
  {
    title: "About Me",
    url: "/about",
  },
  {
    title: "Shop Now",
    url: "/products",
  },
];

const HomeCarousel: React.FC<HomeCarouselProps> = ({ homeImages }) => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [pressed, setPressed] = useState<boolean>(false);
  const [xDirection, setXDirection] = useState<number>(0);

  const paginateNext = () => {
    const nextIndex = carouselIndex + 1;
    if (nextIndex > homeImages.length - 1) {
      return setCarouselIndex(0);
    }
    setCarouselIndex(nextIndex);
  };

  const paginateLast = () => {
    const lastIndex = carouselIndex - 1;
    if (lastIndex < 0) {
      return setCarouselIndex(homeImages.length - 1);
    }
    setCarouselIndex(lastIndex);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setPressed(true);
    const container = e.currentTarget.getBoundingClientRect();
    setXDirection(e.clientX - container.left);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (!pressed) {
      return;
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
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

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!pressed) {
      return;
    }
    handleMouseUp(e);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginateNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [carouselIndex]);

  return (
    <div className="relative md:m-[30px_0px] md:px-16 sm:my-5 sm:px-5 mt-0 mb-5 pt-0 h-full large:px-[60px]">
      <div className="relative max-w-[1600px] m-[0px_auto]">
        <div className="relative min-w-full block box-border h-full select-none">
          <div
            aria-live="polite"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="block relative m-0 p-0 select-none"
          >
            <div
              style={{
                transform: "translateZ(0)",
                width: `calc(100% * 2)`,
              }}
              className="opacity-100 block relative top-0 left-0 mx-auto"
              role="listbox"
            >
              {homeImages.map((img, index) => (
                <div
                  key={img.id}
                  aria-hidden={index == carouselIndex ? "false" : "true"}
                  style={{
                    transition:
                      index == carouselIndex ? "opacity 500ms ease 0s" : "",
                  }}
                  className={cn(
                    "relative left-0 top-0 block h-full overflow-hidden float-left min-h-[1px] w-1/2 rounded-[30px]",
                    carouselIndex == index
                      ? "z-400 opacity-100"
                      : `z-299 opacity-0`,
                    index == 1 && "-left-[50%]"
                  )}
                >
                  <div className="will-change-transform scale-[1.07] opacity-100 animation-zoom-out small:relative">
                    <Link href="#" className="touch-manipulation">
                      <div
                        className="md:h-[520px] h-[180px] min-w-full bg-cover bg-center opacity-100 mx-auto"
                        style={{
                          backgroundImage: `url(${img.url})`,
                          transition: "all .25s",
                        }}
                      >
                        <div
                          className="pt-[31.73828125%] relative"
                          style={{ transition: "background .5s" }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className={cn(
                      "top-1/2 left-1/2 text-center absolute w-[calc(50%-120px)] pointer-events-none p-[30px_30px_35px] overflow-hidden z-10",
                      index === carouselIndex ? "opacity-100" : "opacity-0"
                    )}
                    style={{
                      transition: "opacity 0.7s 0.6s",
                      marginLeft: "-20%",
                      marginTop: "-10%",
                    }}
                  >
                    <div className="bg-white absolute top-0 left-0 w-full h-full opacity-50" />
                    <div className="text-[#333333] relative z-10 text-center">
                      <h2
                        className="mb-4 w-full text-center text-3xl font-bold uppercase"
                        style={{
                          marginInlineStart: "auto",
                          marginInlineEnd: "auto",
                        }}
                      >
                        {img.title}
                      </h2>
                      <div className="mx-0 my-4 text-center text-[#333333]">
                        {img.description}
                      </div>
                      <div className="text-[#333333] text-center">
                        <Link
                          href={centerButtons[index].url}
                          className="md:py-2 md:px-[22px] pointer-events-auto m-[15px_7.5px_px0] touch-manipulation small:text-[1rem]"
                        >
                          {centerButtons[index].title}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ul className="static w-[calc(100%-100px)] m-[0px_auto] block list-none text-center p-0">
            {homeImages.map((img, index) => (
              <ul
                key={index}
                className="inline-block my-0 mx-2 list-none text-center"
              >
                <button
                  role="button"
                  type="button"
                  tabIndex={index}
                  onClick={() => setCarouselIndex(index)}
                  className={cn(
                    "text-transparent transition-all border-solid border-2 h-[6px] w-[6px] min-w-0 shadow-none rounded-md text-[0px] outline-none cursor-pointer",
                    index == carouselIndex
                      ? "bg-white border-[#333333] border-opacity-30 h-[10px] w-[10px]"
                      : "bg-[#33333380] border-transparent"
                  )}
                >
                  {index}
                </button>
              </ul>
            ))}
          </ul>
        </div>
        <div className="small:left-5 absolute left-0 -bottom-1 cursor-pointer">
          <ArrowBigLeft onClick={paginateLast} />
        </div>
        <div className="small:right-5 absolute right-0 -bottom-1 cursor-pointer">
          <ArrowBigRight onClick={paginateNext} />
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
