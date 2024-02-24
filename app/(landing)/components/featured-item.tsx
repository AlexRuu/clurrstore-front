"use client";

import Button from "@/components/ui/myButton";
import { cn } from "@/libs/utlils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { InView } from "react-intersection-observer";

interface FeaturedSectionProps {
  featured: Product;
}

const FeaturedItem: React.FC<FeaturedSectionProps> = ({ featured }) => {
  const linkTitle = featured.title.replaceAll(" ", "-");

  return (
    <div className="relative xsmall:px-0 small:mt-5 small:px-5 my-[30px] m-[0_auto] px-[30px] w-full">
      <div className="bg-[#cee5c3] xsmall:rounded-none rounded-[30px] items-center flex justify-between flex-wrap overflow-hidden relative z-[1] max-w-[1600px] m-[0px_auto]">
        <div className="relative small:w-full w-1/2 overflow-hidden">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={cn(
                  "small:p-[30px_30px_0px_30px] p-[30px_0px_30px_30px] will-change-[transform,opacity] opacity-0",
                  inView && "animate-zoom-out-fade-in"
                )}
              >
                <Link
                  href={`/products/${linkTitle}-${featured.id}`}
                  className="rounded-[30px] overflow-hidden relative z-[1] block touch-manipulation bg-transparent w-full"
                >
                  <div
                    className="h-auto w-full block"
                    style={{
                      backfaceVisibility: "hidden",
                      transition: "opacity .4s cubic-bezier(.25,.46,.45,.94)",
                    }}
                  >
                    <div className="overflow-hidden small:overflow-hidden rounded-3xl mx-auto">
                      <div className="pt-[100%] relative transition-[background] duration-500">
                        <Image
                          src={featured.image[0].url}
                          fill
                          alt=""
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          style={{ objectFit: "cover" }}
                          className="object-[50%_50%] opacity-100 transition-[opacity_transform] duration-500 absolute top-0 left-0 max-w-full border-none hover:scale-105"
                        ></Image>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </InView>
        </div>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={cn(
                "small:p-[45px_30px] p-[60px] opacity-0 relative small:w-full w-1/2",
                inView && "animate-fade-in"
              )}
            >
              <div className="text-center">
                <h2 className="mb-[15px] small:text-[28px] text-3xl">
                  {featured.title}
                </h2>
                <div>
                  <p className="m-[15px_0px]">A custom canvas project!</p>
                </div>
                <Link href={`/products/${linkTitle}-${featured.id}`}>
                  <Button
                    className="text-black bg-[#e2ecf2] hover:shadow-home-button hover:-translate-y-[3px] hover:brightness-95"
                    style={{ transition: "all 0.1s ease-in-out" }}
                  >
                    Get it while it lasts!
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default FeaturedItem;
