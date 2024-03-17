"use client";

import { cn } from "@/libs/utlils";
import Link from "next/link";
import { yeseva_one } from "@/app/font";
import NavLinks from "./nav-links";
import RightNav from "./right-nav";
import { Category, Profile } from "@/types";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NavMobile from "./nav-mobile";
import SearchForm from "@/components/forms/search-form";
import useNavSearch from "@/hooks/use-nav-search";
import useMediaQuery from "@/hooks/use-media-query";

interface NavMainProps {
  data: Category[];
  profile: boolean;
}

const NavMain: React.FC<NavMainProps> = ({ data, profile }) => {
  const [scrollY, setScrollY] = useState(0);
  const navSearch = useNavSearch();
  const ref = useRef<HTMLDivElement | null>(null);
  const notPhone = useMediaQuery("(min-width: 450px)");

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const clickedOutside = (e: any) => {
      if (scrollY <= 160) {
        if (navSearch.isOpen && !ref.current?.contains(e.target)) {
          navSearch.onClose();
        }
      }
    };
    document.addEventListener("mousedown", clickedOutside);
    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [navSearch.isOpen]);

  return (
    <div
      className={cn(
        "z-10 relative flow-root",
        scrollY >= 32 && "small:h-[131px]"
      )}
    >
      <div>
        <section className="text-white bg-[#219190]">
          <div className="text-center py-1">
            Delivery fee will be calculated at checkout
          </div>
        </section>
      </div>
      <div
        className={cn(
          "relative",
          scrollY >= 32 &&
            "med-small:fixed med-small:z-[101] med-small:top-0 med-small:left-0 med-small:w-full med-small:shadow-[0_-2px_10px_#000000bf] med-small:text-sm med-small:h-[99px]"
        )}
      >
        <header
          className={cn(
            "relative small:transition-[z-index] small:duration-0 small:delay-300 small:px-5 med-small:p-0 z-[105] w-full block bg-white"
          )}
        >
          <div className="med-small:block med-small:p-0 items-center flex justify-between relative max-w-[1600px] m-[0px_auto]">
            <div className="flex-grow w-full">
              <div className="bg-white flex">
                <div
                  ref={ref}
                  className={cn(
                    "med-small:absolute med-small:opacity-0 med-small:w-full med-small:h-full medium-min:h-full medium-min:absolute medium-min:opacity-0 hidden medium-min:left-0 medium-min:m-[0_auto] medium-min:w-full medium-min:justify-center medium-min:bg-white",
                    navSearch.isOpen
                      ? "medium-min:opacity-100 medium-min:flex z-[103] bg-white pointer-events-auto med-small:flex med-small:opacity-100"
                      : "medium-min:z-0",
                    scrollY >= 160 && "medium-min:hidden"
                  )}
                >
                  <SearchForm
                    className="w-[400px] max-w-[400px] med-small:w-full med-small:max-w-full"
                    formClass="w-full justify-center"
                  />
                </div>
                <div
                  className={cn(
                    "med-small:justify-between med-small:relative med-small:w-full med-small:p-[10px_20px] justify-center med-small:items-center flex flex-grow relative med-small:ml-2",
                    navSearch.isOpen && "z-0"
                  )}
                >
                  <NavMobile data={data} scrollY={scrollY} />
                  <h1
                    className={cn(
                      "med-small:block med-small:p-0 med-small:mr-auto med-small:flex-grow med-small:text-left med-small:ml-2 text-logo max-w-[280px]",
                      yeseva_one.className
                    )}
                  >
                    <Link
                      href={"/"}
                      className={cn(
                        "flex items-center med-small:flex-row flex-col med-small:text-xl text-2xl pt-[15px]"
                      )}
                    >
                      <Image
                        src={"/images/logo.png"}
                        alt=""
                        height={0}
                        width={0}
                        sizes="100vw"
                        priority
                        className={cn(
                          "med-small:h-14 med-small:w-14 w-20 h-20 med-small:mr-2 mb-2"
                        )}
                      />
                      {notPhone && "Clurr's Studio"}
                    </Link>
                  </h1>
                </div>
                <RightNav scrollY={scrollY} profile={profile} />
              </div>
            </div>
          </div>
        </header>
        <NavLinks profile={profile} data={data} scrollY={scrollY} />
      </div>
      <div
        aria-hidden={navSearch.isOpen}
        aria-label="Close"
        className={cn(
          "content-none fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] opacity-0 pointer-events-none invisible transition-[opacity_0.35s,visibility_0.35s]",
          navSearch.isOpen && "opacity-100 pointer-events-auto visible z-[100]",
          scrollY >= 32 && "med-small:z-[50]"
        )}
      />
    </div>
  );
};

export default NavMain;
