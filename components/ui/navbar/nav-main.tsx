"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Yeseva_One } from "next/font/google";
import NavLinks from "./nav-links";
import RightNav from "./right-nav";
import { Category } from "@/types";
import { useState, useEffect } from "react";
import Image from "next/image";

const logoFont = Yeseva_One({ weight: ["400"], subsets: ["latin"] });

interface NavMainProps {
  data: Category[];
}

const NavMain: React.FC<NavMainProps> = ({ data }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "z-[101] flex flex-col flex-nowrap w-full fixed top-0 ",
        scrollY >= 20 && "shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
      )}
    >
      <div
        className={cn(
          "bg-white",
          scrollY >= 20 && "shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
        )}
      >
        <section className="xl:!p-[0px_85px] md:p-[0px_55px] flex flex-row flex-nowrap justify-between">
          <div className="relative z-[1] w-full flex flex-row flex-nowrap justify-start">
            <div className="mr-12">
              <Link
                href="/"
                className="md:p-[20px_4px_20px_0] items-center box-content flex flex-nowrap flex-row flex-shrink-0 h-10 justify-start m-[0_10px_0_0] p-[12px_4px_12px_0]"
              >
                <div
                  className={cn(
                    "text-2xl text-logo tracking-[2px] flex justify-center items-center",
                    logoFont.className
                  )}
                >
                  <Image
                    src="/images/logo.png"
                    width={50}
                    height={50}
                    alt=""
                  ></Image>
                  <p>clurr's.studio</p>
                </div>
              </Link>
            </div>
            <NavLinks data={data} />
          </div>
          <RightNav />
        </section>
      </div>
    </header>
  );
};

export default NavMain;
