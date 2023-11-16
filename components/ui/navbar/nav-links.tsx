"use client";

import { cn } from "@/libs/utlils";
import { Category } from "@/types";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const NavLinks: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.title,
    active: pathname === `/category/${route.id}`,
  }));

  const navRoutes = [
    {
      href: "/about",
      label: "About Me",
      active: pathname === "/about",
    },
    {
      href: "/categories",
      label: "Items",
      active: pathname === "/categories",
      submenu: routes,
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
    buttonRef && buttonRef.current?.click();
  };
  const closeMenu = () =>
    dropdownRef &&
    dropdownRef.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );

  const onMouseEnter = (closed: boolean) => {
    clearTimeout(timeout);
    closed && openMenu();
  };
  const onMouseLeave = (open: boolean) => {
    open && (timeout = setTimeout(() => closeMenu(), timeoutDuration));
  };

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {navRoutes.map((route) =>
        route.submenu ? (
          ""
        ) : (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        )
      )}
      <Menu as="div">
        {({ open }) => (
          <>
            <div
              onClick={openMenu}
              onMouseEnter={() => useHover && onMouseEnter(!open)}
              onMouseLeave={() => useHover && onMouseLeave(open)}
            >
              <Menu.Button
                ref={buttonRef}
                className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium hover:text-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                Items
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
                className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
              >
                {routes.map((route) => (
                  <Menu.Item
                    as={Link}
                    href={route.href}
                    key={route.href}
                    className={cn(
                      "flex flex-col text-sm font-medium transition-colors hover:text-black w-full rounded-md px-2 py-2",
                      route.active ? "text-black" : "text-neutral-500"
                    )}
                  >
                    {route.label}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </nav>
  );
};

export default NavLinks;
