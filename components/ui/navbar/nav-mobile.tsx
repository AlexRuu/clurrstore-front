import { Instagram, Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import { usePathname } from "next/navigation";
import { Category } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import Link from "next/link";
import { useState } from "react";
import useMediaQuery from "@/hooks/use-media-query";
import SearchForm from "@/components/forms/search-form";

interface NavMobileProps {
  data: Category[];
}

const NavMobile: React.FC<NavMobileProps> = ({ data }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 939.98px)");

  const routes = data.map((route) => ({
    href: `/categories/${route.title
      .toLowerCase()
      .replaceAll(/.\&.|\W/g, "-")}`,
    label: route.title,
    active:
      pathname ===
      `/categories/${route.title.toLowerCase().replaceAll(/.\&.|\W/g, "-")}`,
  }));

  const navRoutes = [
    {
      href: "/about",
      label: "About Me",
      active: pathname === "/about",
    },
    {
      href: "/products",
      label: "Items",
      active: pathname === "/products",
      submenu: routes,
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
    {
      href: "/FAQ",
      label: "FAQ",
      active: pathname === "FAQ",
    },
  ];

  return (
    <>
      {!isDesktop && (
        <div className="med-small:flex hidden">
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger>
              <Menu size={30} className="mt-3" />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="med-small:h-full"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <SheetHeader className="mt-10 mb-2">
                <SearchForm className="bg-gray-300" page={false} />
              </SheetHeader>
              <div>
                <ul>
                  {navRoutes.map((route) =>
                    route.submenu ? (
                      <li key={route.label}>
                        <Accordion type="single" collapsible>
                          <AccordionItem value={route.label}>
                            <AccordionTrigger>
                              <SheetClose asChild>
                                <Link href={route.href}>{route.label}</Link>
                              </SheetClose>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul>
                                {route.submenu.map((category) => (
                                  <li
                                    key={category.label}
                                    className="px-5 py-2 font-medium text-sm hover:text-neutral-400"
                                  >
                                    <SheetClose asChild>
                                      <Link href={category.href}>
                                        {category.label}
                                      </Link>
                                    </SheetClose>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                    ) : (
                      <li
                        key={route.label}
                        className="flex flex-1 items-center justify-between py-4 font-medium border-b"
                      >
                        <SheetClose asChild>
                          <Link href={route.href} className="hover:underline">
                            {route.label}
                          </Link>
                        </SheetClose>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <SheetFooter className="float-left pt-4 w-full">
                <div className="w-full flex space-x-2">
                  <Link
                    href={"https://www.instagram.com/clurrs.studio/"}
                    className="text-logo"
                  >
                    <Instagram />
                  </Link>
                  <Link
                    href={"https://twitter.com/clurrsstudio"}
                    className="text-logo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="none"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="none"
                        strokeLinecap="butt"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <path
                          transform="scale(5.12,5.12)"
                          d="M16.93359,6l9.7832,14.26172l12.31055,-14.26172h3.17578l-14.08008,16.3125l14.87695,21.6875h-10.01367l-10.44141,-15.22266l-13.13867,15.22266h-3.17773l14.9082,-17.27344l-14.2168,-20.72656z"
                          id="strokeMainSVG"
                          fill="#dddddd"
                          stroke="#dddddd"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        ></path>
                        <g
                          transform="scale(5.12,5.12)"
                          fill="#f19ab6"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinejoin="miter"
                        >
                          <path d="M6.91992,6l14.2168,20.72656l-14.9082,17.27344h3.17773l13.13867,-15.22266l10.44141,15.22266h10.01367l-14.87695,-21.6875l14.08008,-16.3125h-3.17578l-12.31055,14.26172l-9.7832,-14.26172z"></path>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};

export default NavMobile;
