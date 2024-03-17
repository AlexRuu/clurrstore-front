"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/libs/utlils";
import { Category } from "@/types";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import RightNav from "./right-nav";
import useNavSearch from "@/hooks/use-nav-search";
import SearchForm from "@/components/forms/search-form";
import LeftNav from "./left-nav";
import { ChevronDown } from "lucide-react";

interface NavLinksProps {
  data: Category[];
  scrollY: number;
  profile: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ data, scrollY, profile }) => {
  const navSearch = useNavSearch();
  const pathname = usePathname();

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
      label: "Shop",
      active: pathname === "/products",
      submenu: routes,
    },
    {
      href: "/delivery",
      label: "Delivery Info",
      active: pathname === "/delivery",
    },
    {
      href: "/products/Ocean-Lights-4b2e5573-4605-457d-a6e2-cb617d1f64c0",
      label: "Ocean Lights",
      active:
        pathname ===
        "/products/Ocean-Lights-4b2e5573-4605-457d-a6e2-cb617d1f64c0",
    },
  ];

  return (
    <div className={cn(scrollY >= 160 && "med-small:h-[99px] h-[46.5px]")}>
      <div
        className={cn(
          scrollY >= 160 &&
            "fixed top-0 left-0 w-full shadow-[0_-2px_10px_#000000bf]",
          navSearch.isOpen && "z-[101]"
        )}
      >
        <section className={cn("bg-white")}>
          <nav
            className={cn(
              "med-small:opacity-0 med-small:block med-small:fixed med-small:top-0 med-small:left-0 med-small:w-full med-small:bg-white"
            )}
          >
            <div className="inline-flex items-center justify-center w-full med-small:hidden h-12">
              {scrollY >= 160 && <LeftNav />}
              <NavigationMenu.Root>
                <NavigationMenu.List className="center shadow-blackA4 m-[0_0_1px_0] p-1 flex list-none rounded-[6px] bg-white h-10">
                  {navRoutes.map((route) =>
                    route.submenu ? (
                      <NavigationMenu.Item className="mx-4" key={route.label}>
                        <NavigationMenu.Trigger className="group inline-flex h-10 w-max items-center justify-center bg-background border-b-4 border-transparent hover:border-b-4 hover:border-b-black py-1 px-5">
                          <NavigationMenu.Link asChild>
                            <Link href={route.href}>{route.label}</Link>
                          </NavigationMenu.Link>
                          <ChevronDown
                            className="relative ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:-rotate-180"
                            aria-hidden="true"
                          />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="absolute top-[113%] left-[26.5%] w-full data-[state=open]:animate-[fade-in_200ms_ease-in] data-[state=closed]:animate-[fade-out_200ms_ease-out] sm:w-auto bg-white border-b-4 border-b-black p-2">
                          <ul>
                            {route.submenu.map((link) => (
                              <li key={link.label}>
                                <NavigationMenu.Link
                                  asChild
                                  className="flex select-none rounded-[4px] mx-3 my-2 text-[15px] pb-2 leading-none"
                                >
                                  <Link href={link.href}>{link.label}</Link>
                                </NavigationMenu.Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenu.Content>
                      </NavigationMenu.Item>
                    ) : (
                      <NavigationMenu.Item className="mx-4" key={route.label}>
                        <NavigationMenu.Trigger className="inline-flex h-10 w-max items-center justify-center bg-background border-b-4 border-b-transparent hover:border-b-4 hover:border-b-black py-1 px-5">
                          <NavigationMenu.Link asChild>
                            <Link href={route.href}>{route.label}</Link>
                          </NavigationMenu.Link>
                        </NavigationMenu.Trigger>
                      </NavigationMenu.Item>
                    )
                  )}
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </div>
            <div
              className={cn(
                "med-small:opacity-0 med-small:absolute med-small:top-0 med-small:w-full med-small:left-0 medium-min:h-[90%] medium-min:top-0 medium-min:absolute medium-min:opacity-0 hidden medium-min:left-[0%] medium-min:m-[0_auto] medium-min:w-full medium-min:justify-center medium-min:bg-white",
                navSearch.isOpen
                  ? "medium-min:opacity-100 z-[102] flex bg-white pointer-events-auto med-small:opacity-100"
                  : "medium-min:z-0",
                scrollY <= 160 && "hidden"
              )}
            >
              <SearchForm
                className="w-[400px] max-w-[400px] med-small:w-full med-small:max-w-full"
                formClass="w-full justify-center"
              />
            </div>
            {scrollY >= 160 && <RightNav profile={profile} scrollY={scrollY} />}
          </nav>
        </section>
      </div>
    </div>
  );
};

export default NavLinks;
