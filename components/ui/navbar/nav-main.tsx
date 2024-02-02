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
    <div className="z-10 relative flow-root">
      <div
        className={cn(
          scrollY >= 10 &&
            "med-small:fixed med-small:top-0 med-small:left-0 med-small:w-full med-small:shadow-[0_-2px_10px_#000000bf]"
        )}
      >
        <div className="relative">
          <header className="small:transition-[z-index] small:duration-0 small:delay-300 small:px-5 med-small:p-0 px-[30px] z-[105] w-full block bg-white">
            <div className="med-small:block med-small:p-0 items-center flex justify-between relative p-[15px_0px] max-w-[1600px] m-[0px_auto] ">
              <div className="flex-grow w-full">
                <div className="bg-white flex">
                  <div className="med-small:justify-between med-small:relative med-small: w-full med-small:p-[10px_20px] justify-center med-small:items-center flex flex-grow relative">
                    {/* <div></div> search icon? */}
                    {/* <div></div> search bar goes here */}
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
                          className="med-small:h-14 med-small:w-14 w-24 h-24 med-small:mr-2"
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
    //   <header
    //     className={cn(
    //       "z-[101] flex flex-col flex-nowrap w-full fixed top-0 ",
    //       scrollY >= 20 && "shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
    //     )}
    //   >
    //     <div
    //       className={cn(
    //         "bg-white",
    //         scrollY >= 20 && "shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
    //       )}
    //     >
    //       <section className="xl:!p-[0px_85px] md:p-[0px_55px] flex flex-row flex-nowrap justify-between">
    //         <div className="relative z-[1] w-full flex flex-row flex-nowrap justify-start">
    //           <div className="mr-12">
    //             <Link
    //               href="/"
    //               className="md:p-[20px_4px_20px_0] items-center box-content flex flex-nowrap flex-row flex-shrink-0 h-10 justify-start m-[0_10px_0_0] p-[12px_4px_12px_0]"
    //             >
    //               <div
    //                 className={cn(
    //                   "text-2xl text-logo tracking-[2px] flex justify-center items-center",
    //                   logoFont.className
    //                 )}
    //               >
    //                 <Image
    //                   src="/images/logo.png"
    //                   width={50}
    //                   height={50}
    //                   alt=""
    //                 ></Image>
    //                 <p>clurr's.studio</p>
    //               </div>
    //             </Link>
    //           </div>
    //           <NavLinks data={data} />
    //         </div>
    //         <RightNav />
    //       </section>
    //     </div>
    //   </header>
  );
};

export default NavMain;
