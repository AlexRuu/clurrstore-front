"use client";

import {
  Dispatch,
  SetStateAction,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { useAnimate } from "framer-motion";

import { cn } from "@/libs/utlils";
import { Category } from "@/types";

import { ChevronDown, Search, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import RightNav from "./right-nav";

interface NavLinksProps {
  data: Category[];
  scrollY: number;
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({
  data,
  scrollY,
  mobileOpen,
  setMobileOpen,
}) => {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  const [isOpen, setIsOpen] = useState(false);

  const routes = data.map((route) => ({
    href: `/categories/${route.title.replaceAll(/.\&.|\W/g, "-")}`,
    label: route.title,
    active:
      pathname === `/categories/${route.title.replaceAll(/.\&.|\W/g, "-")}`,
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

  const useHover = true;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutDuration = 0;
  let timeout: any;

  const openMenu = () => {
    setIsOpen(true);
    buttonRef && buttonRef.current?.click();
  };

  const closeMenu = () => {
    setIsOpen(false);
    dropdownRef &&
      dropdownRef.current?.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Escape",
          bubbles: true,
          cancelable: true,
        })
      );
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const onMouseEnter = (closed: boolean) => {
    setIsOpen(true);
    clearTimeout(timeout);
    closed && openMenu();
  };

  const onMouseLeave = (open: boolean) => {
    setIsOpen(false);
    open && (timeout = setTimeout(() => closeMenu(), timeoutDuration));
  };

  useEffect(() => {
    animate(scope.current, { rotate: isOpen ? -180 : 0 }, { duration: 0.2 });
  }, [isOpen]);

  return (
    <div className={cn(scrollY >= 160 && "med-small:h-0 h-[46.5px]")}>
      <div
        className={cn(
          scrollY >= 160 &&
            "fixed top-0 left-0 w-full shadow-[0_-2px_10px_#000000bf]"
        )}
      >
        <section className="bg-white">
          <nav
            className={cn(
              "med-small:opacity-0 med-small:block med-small:fixed med-small:top-0 med-small:left-0 med-small:w-full med-small:bg-white",
              mobileOpen && "med-small:opacity-100 med-small:h-full"
            )}
          >
            <div
              className={cn(
                "hidden opacity-0",
                mobileOpen && "block opacity-100"
              )}
            >
              <button onClick={closeMobileMenu}>
                <X />
              </button>
            </div>
            <div
              className={cn(
                "hidden opacity-0",
                mobileOpen && "block opacity-100"
              )}
            >
              <div>
                <div>
                  {/* form */}
                  <button>
                    <Search />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={cn(
                "hidden opacity-0",
                mobileOpen && "block opacity-100"
              )}
            >
              <ul>
                {navRoutes.map((route, index) =>
                  route.submenu ? (
                    <li key={index}>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            <Link href={route.href}>{route.label}</Link>
                          </AccordionTrigger>
                          <ul>
                            {route.submenu.map((individual) => (
                              <li key={individual.label}>
                                <AccordionContent>
                                  <Link
                                    href={individual.href}
                                    onClick={closeMobileMenu}
                                  >
                                    {individual.label}
                                  </Link>
                                </AccordionContent>
                              </li>
                            ))}
                          </ul>
                        </AccordionItem>
                      </Accordion>
                    </li>
                  ) : (
                    <li
                      key={index}
                      className="flex flex-1 items-center justify-between py-4 font-medium hover:underline border-b"
                    >
                      <Link href={route.href}>{route.label}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="inline-flex items-center justify-center w-full med-small:hidden">
              {navRoutes.map((route) =>
                route.submenu ? (
                  <Menu as="div" key={route.href}>
                    {({ open }) => (
                      <>
                        <div
                          onClick={openMenu}
                          onMouseEnter={() => useHover && onMouseEnter(!open)}
                          onMouseLeave={() => useHover && onMouseLeave(open)}
                        >
                          <Menu.Button
                            ref={buttonRef}
                            as={Link}
                            href={route.href}
                            className={cn(
                              "inline-flex py-2 text-lg transition-colors hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 px-[50px]",
                              route.active ? "text-black" : "text-neutral-500"
                            )}
                          >
                            Items
                            <ChevronDown
                              ref={scope}
                              size={18}
                              className="ml-auto mt-1.5"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            ref={dropdownRef}
                            onMouseEnter={() => useHover && onMouseEnter(!open)}
                            onMouseLeave={() => useHover && onMouseLeave(open)}
                            static
                            className="absolute top-[100%] ml-12 w-56 origin-top-left divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                          >
                            {route.submenu.map((link) => (
                              <Menu.Item
                                onClick={closeMenu}
                                as={Link}
                                href={link.href}
                                key={link.href}
                                className={cn(
                                  "flex flex-col text-lg font-medium transition-colors hover:text-black hover:underline w-full rounded-md px-2 py-3 text-neutral-500"
                                )}
                              >
                                {link.label}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                ) : (
                  <Link
                    href={route.href}
                    key={route.href}
                    className={cn(
                      "text-lg transition-colors hover:text-black py-2 px-[50px]",
                      route.active ? "text-black" : "text-neutral-500"
                    )}
                  >
                    {route.label}
                  </Link>
                )
              )}
            </div>
            {scrollY >= 160 && (
              <RightNav scrollY={scrollY} mobileOpen={mobileOpen} />
            )}
          </nav>
        </section>
      </div>
    </div>
  );
};

export default NavLinks;
