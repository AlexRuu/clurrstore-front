"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Yeseva_One } from "next/font/google";
import NavLinks from "./nav-links";
import RightNav from "./right-nav";
import { Category } from "@/types";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavMobile from "./nav-mobile";
import SearchForm from "@/components/forms/search-form";
import useNavSearch from "@/hooks/use-nav-search";

const logoFont = Yeseva_One({ weight: ["400"], subsets: ["latin"] });

interface NavMainProps {
  data: Category[];
}

const NavMain: React.FC<NavMainProps> = ({ data }) => {
  const [scrollY, setScrollY] = useState(0);
  const navSearch = useNavSearch();

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
    console.log(navSearch.isOpen);
  }, [navSearch.isOpen]);

  return (
    <div className="z-10 relative flow-root">
      <div
        className={cn(
          scrollY >= 10 &&
            "med-small:fixed med-small:top-0 med-small:left-0 med-small:w-full med-small:shadow-[0_-2px_10px_#000000bf]"
        )}
      >
        <div className="relative">
          <section className="text-white bg-[#219190]">
            <div className="text-center py-1">
              Delivery fee will be calculated at checkout
            </div>
          </section>
          <header className="small:transition-[z-index] small:duration-0 small:delay-300 small:px-5 med-small:p-0 px-[30px] z-[105] w-full block bg-white">
            <div className="med-small:block med-small:p-0 items-center flex justify-between relative p-[15px_0px] max-w-[1600px] m-[0px_auto] ">
              <div className="flex-grow w-full">
                <div className="bg-white flex">
                  <div
                    className={cn(
                      "medium-min:absolute medium-min:block medium-min:z-0 opacity-0 hidden medium-min:left-[15%]",
                      navSearch.isOpen && "opacity-100"
                    )}
                  >
                    <SearchForm />
                  </div>
                  <div className="med-small:justify-between med-small:relative med-small: w-full med-small:p-[10px_20px] justify-center med-small:items-center flex flex-grow relative">
                    <NavMobile data={data} />
                    <h1
                      className={cn(
                        "med-small:block med-small:ml-[10px] med-small:p-0 med-small:mr-auto med-small:flex-grow med-small:text-left text-logo max-w-[280px]",
                        logoFont.className
                      )}
                    >
                      <Link
                        href={"/"}
                        className="flex items-center med-small:flex-row flex-col med-small:text-xl text-2xl"
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
    </div>
  );
};

export default NavMain;
