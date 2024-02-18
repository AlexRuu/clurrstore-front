"use client";

import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";

const CartTotal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const totalPrice = cart.items.reduce((acc, current) => {
    if (current.styleName == "B Grade (-C$2.00)") {
      const newPrice = Number(current.price) - 2;
      return acc + newPrice * current.quantity;
    }
    return acc + Number(current.price * current.quantity);
  }, 0);

  return (
    <>
      <div className="-ml-[30px]">
        <div className="small:w-full small:pl-5 float-left block pl-[30px] w-1/2">
          <div className="small:text-center small:pt-0 small:mt-5 block mt-[30px] pt-[1.2em] text-sm">
            Taxes and shipping calculated at checkout
          </div>
        </div>
        <div className="small:w-full small:pl-5 float-left !text-right block pl-[30px] w-1/2">
          <div className="small:text-center small:mt-5 mt-[30px] block">
            <div className="inline-block mr-[2em] small:text-center !text-right ">
              <h2 className="small:text-[19.768px] text-[19.768px] m-0">
                Subtotal:
              </h2>
            </div>
            <div className="inline-block small:text-[19.768px] text-[calc(28px*.825)]">
              <span className="small:text-[19.768px] text-[calc(28px*.825)] small:text-center !text-right">
                CAD ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
