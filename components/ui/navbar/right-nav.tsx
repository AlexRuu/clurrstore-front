"use client";

import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";

import { ShoppingCart } from "lucide-react";
import { cn } from "@/libs/utlils";
import Link from "next/link";

interface RightNavProps {
  scrollY?: number;
  mobileOpen?: boolean;
}

const RightNav: React.FC<RightNavProps> = ({ scrollY, mobileOpen }) => {
  const cart = useCart();

  const [isMounted, setIsMounted] = useState(false);
  const [cartAmount, setCartAmount] = useState(0);

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
        "absolute justify-end flex items-center med-small:right-10 med-small:top-5 right-10 top-16 lg:right-16 xl:right-18",
        scrollY! >= 160 && "top-2 lg:right-24",
        mobileOpen && "hidden"
      )}
    >
      <Link href={"/cart"}>
        <ShoppingCart
          color="#f199b3"
          strokeWidth={2}
          size={30}
          className="z-0 hover:fill-[#f199b3] transition-[fill] ease-in"
        />
        <span
          className={cn(
            "text-xs font-medium text-black absolute",
            cartAmount > 9 ? "ml-2.5" : "ml-3.5"
          )}
        >
          {cartAmount !== 0 ? cartAmount : ""}
        </span>
      </Link>
    </div>
  );
};

export default RightNav;
