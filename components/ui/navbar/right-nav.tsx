"use client";

import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";

import { Search, ShoppingBag, User2 } from "lucide-react";
import { cn } from "@/libs/utlils";
import Link from "next/link";
import useNavSearch from "@/hooks/use-nav-search";

interface RightNavProps {
  mobileOpen?: boolean;
}

const RightNav: React.FC<RightNavProps> = ({ mobileOpen }) => {
  const cart = useCart();
  const navSearch = useNavSearch();
  const [isMounted, setIsMounted] = useState(false);
  const [cartAmount, setCartAmount] = useState(0);

  const iconStyle = cn(
    "z-0 hover:opacity-80 w-[30px] h-[30px]",
    scrollY >= 110 && "med-small:w-[24px] med-small:h-[24px]",
    scrollY >= 160 && "w-[24px] h-[24px]"
  );

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
        "absolute justify-end flex items-center med-small:right-7 med-small:top-10 right-16 top-12 lg:right-16 lg:top-12 xl:right-24",
        scrollY! >= 160 && "lg:top-2 top-3 mr-0",
        scrollY! >= 110 && "med-small:top-5",
        mobileOpen && "hidden"
      )}
    >
      <button onClick={navSearch.onOpen} className="mr-3">
        <Search color="#f199b3" strokeWidth={2} className={iconStyle} />
      </button>
      <button className="mr-3">
        <User2 color="#f199b3" strokeWidth={2} className={iconStyle} />
      </button>
      <Link href={"/cart"}>
        <ShoppingBag color="#f199b3" strokeWidth={2} className={iconStyle} />
        <span className="absolute -top-1 -right-1 box-content min-w-[1em] p-[2px] text-[11px] font-medium leading-[1em] text-center tracking-[initial] rounded-full bg-black text-white border-[1.5px_solid_white]">
          {cartAmount !== 0 && cartAmount}
        </span>
      </Link>
    </div>
  );
};

export default RightNav;
