"use client";

import useCart from "@/hooks/use-cart";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartItem from "./cart-item";

const CartSummary = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="small:px-5 m-[0_auto] px-[30px] w-full block">
      {cart.items.length == 0 ? (
        <div className="flex justify-center items-center flex-col">
          <p className="py-3">Cart is currently empty.</p>
          <Link
            href={"/products"}
            className="text-blue-800 hover:text-blue-600 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="small:my-5 max-w-[1600px] m-[0_auto] block">
          <ul className="small:mt-[30px] m-0 p-0">
            {cart.items.map(
              (
                {
                  id,
                  name,
                  image,
                  price,
                  quantity,
                  designName,
                  styleName,
                  selectedDesign,
                  selectedStyle,
                },
                index
              ) => (
                <CartItem
                  id={id}
                  name={name}
                  key={index}
                  image={image}
                  price={price}
                  quantity={quantity}
                  designName={designName}
                  styleName={styleName}
                  designId={selectedDesign}
                  styleId={selectedStyle}
                />
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
