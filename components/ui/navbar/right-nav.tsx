"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";

import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const RightNav = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="">
      <Button onClick={() => router.push("/cart")}>
        <ShoppingCart color="#f199b3" />
      </Button>
    </div>
  );
};

export default RightNav;
