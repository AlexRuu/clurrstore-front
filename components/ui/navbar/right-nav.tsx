"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";

import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/libs/utlils";

const RightNav = () => {
  const cart = useCart();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    const cartQuantity = cart.items.reduce(
      (total, current) => total + current.quantity,
      0
    );
    setCartAmount(cartQuantity);
  }, [cart.items]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full px-4 py-2 "
        onClick={() => router.push("/cart")}
      >
        <ShoppingCart
          color="#f199b3"
          fill="#f199b3"
          strokeWidth={2}
          size={30}
          className="z-0"
        />
        <span
          className={cn(
            "text-xs font-medium text-black absolute",
            cartAmount > 9 ? "ml-2.5" : "ml-3.5"
          )}
        >
          {cartAmount}
        </span>
      </Button>
    </div>
  );
};

export default RightNav;
