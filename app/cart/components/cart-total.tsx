"use client";

import Button from "@/components/ui/myButton";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useSearchParams } from "next/navigation";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/libs/utlils";
import { poppins } from "@/app/font";

const CartTotal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams();
  const cart = useCart();
  const removeAll = useCart((state) => state.removeAll);

  const failNotify = () => {
    toast.error("Something went wrong...", {
      bodyClassName: cn("text-black", poppins),
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Zoom,
    });
  };

  useEffect(() => {
    if (searchParams.get("canceled")) {
      failNotify();
    }
  }, [searchParams, removeAll]);

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

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      cart.items
    );
    window.location = response.data.url;
  };

  return (
    <>
      {cart.items.length !== 0 && (
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
          <div className="text-right small:my-5 my-[30px] small:mx-3 block">
            <div className="block my-5">
              <Button
                onClick={onCheckout}
                className="text-black small:w-full small:text-center w-[30%] my-5 small:px-0 border bg-[#e2ecf2] hover:shadow-home-button hover:-translate-y-[3px] hover:brightness-95 uppercase"
              >
                Check Out
              </Button>
            </div>
          </div>
          <ToastContainer stacked style={{ borderRadius: "30px" }} />
        </>
      )}
    </>
  );
};

export default CartTotal;
