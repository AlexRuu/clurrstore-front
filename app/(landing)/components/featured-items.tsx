"use client";

import { Product } from "@/types";
import { InView } from "react-intersection-observer";
import FeaturedTitle from "./featured-title";
import { cn } from "@/libs/utlils";
import Link from "next/link";
import Image from "next/image";

interface featuredItemProps {
  items: Product[];
}

const FeaturedItems: React.FC<featuredItemProps> = ({ items }) => {
  return (
    <div className="small:my-5 small:px-5 relative my-[30px] m-[0_auto] px-[30px] w-full">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            className={cn(
              "text-center py-10 opacity-0 transition-[opacity, transform]",
              inView && "animate-fade-left"
            )}
            ref={ref}
          >
            <FeaturedTitle title="Featured Items" />
          </div>
        )}
      </InView>
      <div className="max-w-[1600px] m-[0_auto]">
        <div className="small:-mx-5 small:px-5 relative small:overflow-hidden">
          <div className="small:-ml-5 flex flex-wrap -ml-[30px] -mb-[30px]">
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
                        href={
                          "/products/Red-String-of-Fate-Matching-Necklaces-517f6b8e-c6e7-4142-ab83-32b33120f5c0"
                        }
                        className="block relative overflow-hidden touch-manipulation"
                      >
                        <div
                          className="h-auto w-full block transition-opacity duration-500 ease-opacity-fade-in hover:opacity-0"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <div className="max-w-[1236px] max-h-[1236px] mx-auto">
                            <div className="pt-[100%] relative transition-[background] duration-500">
                              <Image
                                src={items[0].image[0].url}
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
                                src={items[0].image[1].url}
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
                      href={
                        "/products/Red-String-of-Fate-Matching-Necklaces-517f6b8e-c6e7-4142-ab83-32b33120f5c0"
                      }
                      className="no-underline touch-manipulation bg-transparent"
                    >
                      {items[0].title}
                    </Link>
                  </div>
                </div>
              )}
            </InView>
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
                        href={
                          "/products/Red-String-of-Fate-Matching-Pins-266969d8-cf47-4567-8a31-4407745976cc"
                        }
                        className="block relative overflow-hidden touch-manipulation "
                      >
                        <div
                          className="h-auto w-full block transition-opacity duration-500 ease-opacity-fade-in hover:opacity-0"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <div className="max-w-[1236px] max-h-[1236px] mx-auto">
                            <div className="pt-[100%] relative transition-[background] duration-500">
                              <Image
                                src={items[1].image[0].url}
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
                                src={items[1].image[1].url}
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
                      href={
                        "/products/Red-String-of-Fate-Matching-Pins-266969d8-cf47-4567-8a31-4407745976cc"
                      }
                      className="no-underline touch-manipulation bg-transparent"
                    >
                      {items[1].title}
                    </Link>
                  </div>
                </div>
              )}
            </InView>
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
                        href={
                          "/products/Poker-of-Life-1592c7ac-2a82-4597-bd23-1729330a3896"
                        }
                        className="block relative overflow-hidden touch-manipulation "
                      >
                        <div
                          className="h-auto w-full block transition-opacity duration-500 ease-opacity-fade-in hover:opacity-0"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <div className="max-w-[1236px] max-h-[1236px] mx-auto">
                            <div className="pt-[100%] relative transition-[background] duration-500">
                              <Image
                                src={items[2].image[0].url}
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
                                src={items[2].image[1].url}
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
                      href={
                        "/products/Poker-of-Life-1592c7ac-2a82-4597-bd23-1729330a3896"
                      }
                      className="no-underline touch-manipulation bg-transparent"
                    >
                      {items[2].title}
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

export default FeaturedItems;
