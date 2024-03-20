"use client";

import { useEffect, useRef, useState } from "react";
import useCart from "@/hooks/use-cart";

import { Search, ShoppingBag, User2 } from "lucide-react";
import { cn } from "@/libs/utlils";
import Link from "next/link";
import useNavSearch from "@/hooks/use-nav-search";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { signOut } from "@/actions/auth";

interface RightNavProps {
  mobileOpen?: boolean;
  scrollY: number;
  profile: boolean;
}

const RightNav: React.FC<RightNavProps> = ({
  mobileOpen,
  scrollY,
  profile,
}) => {
  const cart = useCart();
  const navSearch = useNavSearch();
  const [isMounted, setIsMounted] = useState(false);
  const [cartAmount, setCartAmount] = useState(0);

  const iconStyle = cn(
    "z-0 hover:opacity-80 w-[30px] h-[30px]",
    scrollY >= 160 && "medium-min:w-[24px] medium-min:h-[24px]"
  );

  const handleSignout = async () => {
    await signOut();
  };

  useEffect(() => {
    const cartQuantity = cart.items.reduce(
      (total, current) => total + current.quantity,
      0
    );
    setCartAmount(cartQuantity);
  }, [cart]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div
      className={cn(
        "absolute justify-end flex items-center med-small:right-7 med-small:top-11 right-16 top-12 lg:right-16 lg:top-12 xl:right-24",
        scrollY! >= 160 && "lg:top-3 top-3 mr-0",
        mobileOpen && "hidden"
      )}
    >
      <NavigationMenu.Root>
        <NavigationMenu.List className="list-none flex items-center">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger onClick={navSearch.onOpen} className="mr-3">
              <Search color="black" strokeWidth={2} className={iconStyle} />
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="mr-3 med-small:hidden">
              <User2 color="black" strokeWidth={2} className={iconStyle} />
            </NavigationMenu.Trigger>
            {profile ? (
              <NavigationMenu.Content className="absolute top-[113%] left-0 text-sm w-[150px] data-[state=open]:animate-fade-in-down data-[state=closed]:animate-fade-out-up bg-white border-b-4 border-b-black p-2 shadow-[0_2px_4px_#00000026]">
                <ul className="list-none">
                  <li className="pb-2 hover:text-gray-400">
                    <Link href="/profile">Profile</Link>
                  </li>
                  <li className="pb-1 hover:text-gray-400">
                    <Link href="/" onClick={handleSignout}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            ) : (
              <NavigationMenu.Content className="absolute top-[113%] left-0 text-sm w-[150px] data-[state=open]:animate-fade-in-down data-[state=closed]:animate-fade-out-up bg-white border-b-4 border-b-black p-2 shadow-[0_2px_4px_#00000026]">
                <ul className="list-none">
                  <li className="pb-2 hover:text-gray-400">
                    <Link href="/account/login">Login</Link>
                  </li>
                  <li className="pb-1 hover:text-gray-400">
                    <Link href="/account/signup">Create an account</Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            )}
          </NavigationMenu.Item>
          <NavigationMenu.Item className="medium-min:hidden">
            <NavigationMenu.Trigger className="mr-3">
              <NavigationMenu.Link asChild>
                <Link href={"/profile"}>
                  <User2 color="black" strokeWidth={2} className={iconStyle} />
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <NavigationMenu.Link asChild>
                <Link href={"/cart"}>
                  <ShoppingBag
                    color="black"
                    strokeWidth={2}
                    className={iconStyle}
                  />
                  <span className="absolute -top-1 -right-1 box-content min-w-[1em] p-[2px] text-[11px] font-medium leading-[1em] text-center tracking-[initial] rounded-full bg-black text-white border-[1.5px_solid_white]">
                    {cartAmount !== 0 ? cartAmount : "0"}
                  </span>
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};

export default RightNav;
