"use client";

import { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { cn } from "@/libs/utlils";
import FeaturedTitle from "./featured-title";

interface FeaturedCategoriesProps {
  categories: Product[];
}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  categories,
}) => {
  const pins = categories.filter((item) => item.category.title === "Pins");

  const jewelry = categories.filter(
    (item) => item.category.title === "Jewelry"
  );

  const stickersWashi = categories.filter(
    (item) => item.category.title === "Stickers & Washi Tape"
  );
  return (
    <div className="small:my-5 small:px-5 relative my-[30px] m-[0_auto] px-[30px] w-full">
      {/* Title */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            className={cn(
              "text-center py-10 opacity-0 transition-[opacity, transform]",
              inView && "animate-fade-left"
            )}
            ref={ref}
          >
            <FeaturedTitle title="Featured Categories" />
          </div>
        )}
      </InView>
      <div className="max-w-[1600px] m-[0_auto]">
        <div className="small:-mx-5 small:px-5 relative small:overflow-hidden">
          <div className="small:-ml-5 flex flex-wrap -ml-[30px] -mb-[30px]">
            {/* Pins Section */}
            <InView triggerOnce>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={cn(
                    "opacity-0 relative text-center small:w-full w-1/3 small:pl-5 pl-[30px] pb-[30px]",
                    inView && "animate-fade-in-up"
                  )}
                  style={{ animationDelay: "0.07s" }}
                >
                  <div className="text-center">
                    <div className="relative rounded-[30px] overflow-hidden z-[1]">
                      <Link
                        href={"/categories/Pins"}
                        className="block relative overflow-hidden touch-manipulation"
                      >
                        <div
                          className="h-auto w-full block transition-opacity duration-500 ease-opacity-fade-in hover:opacity-0"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <div className="max-w-[1236px] max-h-[1236px] mx-auto">
                            <div className="pt-[100%] relative transition-[background] duration-500">
                              <Image
                                src={pins[0].image[0].url}
                                fill
                                alt=""
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="opacity-100 transition-opacity duration-500 absolute top-0 left-0 max-w-full border-none"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute overflow-hidden top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500 ease-opacity-fade-in">
                          <div className="max-w-[1236px] max-h-[1236px] mx-auto">
                            <div className="pt-[100%] relative transition-[background] duration-500">
                              <Image
                                src={pins[1].image[0].url}
                                alt=""
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="opacity-100 transition-opacity duration-500 absolute top-0 left-0 max-w-full border-none"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              ></Image>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-[.5em] uppercase">
                    <Link
                      href={"/categories/Pins"}
                      className="no-underline touch-manipulation bg-transparent"
                    >
                      Pins
                    </Link>
                  </div>
                </div>
              )}
            </InView>
            {/* Jewelry Section */}
            <InView triggerOnce>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={cn(
                    "opacity-0 relative text-center small:w-full w-1/3 small:pl-5 pl-[30px] pb-[30px]",
                    inView && "animate-fade-in-up"
                  )}
                  style={{ animationDelay: "0.14s" }}
                >
                  <div className="text-center">
                    <div className="relative rounded-[30px] overflow-hidden z-[1]">
                      <Link
                        href={"/categories/Jewelry"}
                        className="block relative overflow-hidden touch-manipulation "
                      >
                        <div
                          className="h-auto w-full block transition-opacity duration-500 ease-opacity-fade-in hover:opacity-0"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <div className="max-w-[1236px] max-h-[1236px] mx-auto">
                            <div className="pt-[100%] relative transition-[background] duration-500">
                              <Image
                                src={jewelry[0].image[0].url}
                                fill
                                alt=""
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="opacity-100 transition-opacity duration-500 absolute top-0 left-0 max-w-full border-none"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute overflow-hidden top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500 ease-opacity-fade-in">
                          <div className="max-w-[1236px] max-h-[1236px] mx-auto">
                            <div className="pt-[100%] relative transition-[background] duration-500">
                              <Image
                                src={jewelry[1].image[0].url}
                                alt=""
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="opacity-100 transition-opacity duration-500 absolute top-0 left-0 max-w-full border-none"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              ></Image>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-[.5em] uppercase">
                    <Link
                      href={"/categories/Jewelry"}
                      className="no-underline touch-manipulation bg-transparent"
                    >
                      Jewelry
                    </Link>
                  </div>
                </div>
              )}
            </InView>
            {/* Stickers and Washi Tape Section */}
            <InView triggerOnce>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={cn(
                    "opacity-0 relative text-center small:w-full w-1/3 small:pl-5 pl-[30px] pb-[30px]",
                    inView && "animate-fade-in-up"
                  )}
                  style={{ animationDelay: "0.21s" }}
                >
                  <div className="text-center">
                    <div className="relative rounded-[30px] overflow-hidden z-[1]">
                      <Link
                        href={"/categories/Stickers-Washi-Tape"}
                        className="block relative overflow-hidden touch-manipulation "
                      >
                        <div
                          className="h-auto w-full block transition-opacity duration-500 ease-opacity-fade-in hover:opacity-0"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <div className="max-w-[1236px] max-h-[1236px] mx-auto">
                            <div className="pt-[100%] relative transition-[background] duration-500">
                              <Image
                                src={stickersWashi[0].image[0].url}
                                fill
                                alt=""
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="opacity-100 transition-opacity duration-500 absolute top-0 left-0 max-w-full border-none"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute overflow-hidden top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500 ease-opacity-fade-in">
                          <div className="max-w-[1236px] max-h-[1236px] mx-auto">
                            <div className="pt-[100%] relative transition-[background] duration-500">
                              <Image
                                src={stickersWashi[1].image[0].url}
                                alt=""
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="opacity-100 transition-opacity duration-500 absolute top-0 left-0 max-w-full border-none"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-[.5em] uppercase">
                    <Link
                      href={"/categories/Stickers-Washi-Tape"}
                      className="no-underline touch-manipulation bg-transparent"
                    >
                      Stickers & Washi Tape
                    </Link>
                  </div>
                </div>
              )}
            </InView>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
