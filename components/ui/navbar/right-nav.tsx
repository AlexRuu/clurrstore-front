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
    "z-0 hover:opacity-80",
    scrollY <= 160 && "w-[30px] h-[30px]"
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
        "absolute justify-end flex items-center med-small:right-7 med-small:top-10 right-16 top-12 lg:right-24 lg:top-12",
        scrollY! >= 160 && "med-small:top-2 lg:top-2 top-2 lg:right-24 mr-0",
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
