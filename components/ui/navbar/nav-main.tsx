"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Yeseva_One } from "next/font/google";
import NavLinks from "./nav-links";
import RightNav from "./right-nav";
import { Category } from "@/types";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NavMobile from "./nav-mobile";
import SearchForm from "@/components/forms/search-form";
import useNavSearch from "@/hooks/use-nav-search";
import { Input } from "../input";

const logoFont = Yeseva_One({ weight: ["400"], subsets: ["latin"] });

interface NavMainProps {
  data: Category[];
}

const NavMain: React.FC<NavMainProps> = ({ data }) => {
  const [scrollY, setScrollY] = useState(0);
  const navSearch = useNavSearch();
  const ref = useRef<HTMLDivElement | null>(null);

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
      if (navSearch.isOpen && !ref.current?.contains(e.target)) {
        navSearch.onClose();
      }
    };
    document.addEventListener("mousedown", clickedOutside);
    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [navSearch.isOpen]);
  return (
    <div className="z-10 relative flow-root">
      <div>
        <div className="relative">
          <section className="text-white bg-[#219190]">
            <div className="text-center py-1">
              Delivery fee will be calculated at checkout
            </div>
          </section>
          <header className="small:transition-[z-index] small:duration-0 small:delay-300 small:px-5 med-small:p-0  z-[105] w-full block bg-white">
            <div className="med-small:block med-small:p-0 items-center flex justify-between relative max-w-[1600px] m-[0px_auto] ">
              <div className="flex-grow w-full">
                <div className="bg-white flex">
                  <div
                    ref={ref}
                    className={cn(
                      "medium-min:h-full medium-min:absolute medium-min:opacity-0 hidden medium-min:left-[0%] medium-min:m-[0_auto] medium-min:w-full medium-min:justify-center medium-min:bg-white",
                      navSearch.isOpen
                        ? "medium-min:opacity-100 flex z-10 bg-white pointer-events-auto"
                        : "medium-min:z-0"
                    )}
                  >
                    <SearchForm
                      className="w-[400px] max-w-[400px]"
                      formClass="w-full justify-center"
                    />
                  </div>
                  <div
                    className={cn(
                      "med-small:justify-between med-small:relative med-small:w-full med-small:p-[10px_20px] justify-center med-small:items-center flex flex-grow relative",
                      navSearch.isOpen && "z-0"
                    )}
                  >
                    <NavMobile data={data} />
                    <h1
                      className={cn(
                        "med-small:block med-small:ml-[10px] med-small:p-0 med-small:mr-auto med-small:flex-grow med-small:text-left text-logo max-w-[280px]",
                        logoFont.className
                      )}
                    >
                      <Link
                        href={"/"}
                        className="flex items-center med-small:flex-row flex-col med-small:text-xl text-2xl pt-[15px]"
                      >
                        <Image
                          src={"/images/logo.png"}
                          alt=""
                          height={0}
                          width={0}
                          sizes="100vw"
                          priority
                          className="med-small:h-14 med-small:w-14 w-20 h-20 med-small:mr-2"
                        />
                        Clurr's Studio
                      </Link>
                    </h1>
                  </div>
                  <RightNav />
                </div>
              </div>
            </div>
          </header>
          <NavLinks data={data} scrollY={scrollY} />
        </div>
      </div>
      <a
        href="#"
        aria-hidden={navSearch.isOpen}
        aria-label="Close"
        className={cn(
          "content-none fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] opacity-0 pointer-events-none invisible transition-[opacity_0.35s,visibility_0.35s]",
          navSearch.isOpen && "opacity-100 pointer-events-auto visible"
        )}
      ></a>
    </div>
  );
};

export default NavMain;
