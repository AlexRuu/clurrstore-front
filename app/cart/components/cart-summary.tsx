"use client";

import useCart from "@/hooks/use-cart";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartItem from "./cart-item";

const CartSummary = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="small:px-5 m-[0_auto] px-[30px] w-full block">
      {/* Display only if cart has items */}
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
        // The headers for the summary table
        <div className="small:my-5 max-w-[1600px] m-[0_auto] block">
          <ul className="small:mt-[30px] m-0 p-0">
            <li className="small:hidden border-t border-solid border-[#f3f3f3] mt-[30px] pb-[15px] pt-0 flex justify-between border-b flex-nowrap">
              <span className="mt-[15px] pl-0 flex-grow">Product</span>
              <span className="pt-[15px] pl-0 md-max:w-[120px] md-max:min-w-[120px] flex-[0_0_auto] text-center w-[16.67%] min-w-[145px]">
                Price
              </span>
              <span className="pt-[15px] pl-0 w-[12.5%] min-w-[145px] flex-[0_0_auto] text-center">
                Quantity
              </span>
              <span className="pt-[15px] pl-0 text-right md-max:w-[100px] md-max:min-w-[100px] flex-[0_0_auto] min-w-[145px]">
                Total
              </span>
            </li>
            {/* Display individual items with corresponding information */}
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
