import { Instagram, Menu, Twitter } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
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
import { cn } from "@/libs/utlils";

interface NavMobileProps {
  data: Category[];
  scrollY: number;
}

const NavMobile: React.FC<NavMobileProps> = ({ data, scrollY }) => {
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
              <Menu size={30} className={cn("mt-3")} />
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
                    className="text-logo hover:text-[#e54070]"
                  >
                    <Instagram />
                  </Link>
                  <Link
                    href={"https://twitter.com/clurrsstudio"}
                    className="text-logo hover:text-[#e54070]"
                  >
                    <Twitter />
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
