"use client";
import useCart from "@/hooks/use-cart";
import { CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface OrderHeaderProps {
  orderNumber: string;
}

const OrderHeader: React.FC<OrderHeaderProps> = ({ orderNumber }) => {
  const searchParams = useSearchParams();
  const removeAll = useCart((state) => state.removeAll);

  // Remove everything from cart if payment is successful
  useEffect(() => {
    if (searchParams.get("success")) {
      removeAll();
    }
  }, [searchParams, removeAll]);

  return (
    <>
      <div>
        <CheckCircle2 size={64} color="#f19ab3" />
      </div>
      <div className="flex flex-col justify-center items-center flex-nowrap">
        <h1 className="text-4xl mt-5 my-3">Order Confirmed!</h1>
        <p>Thank you for your support!</p>
        <p>Your order number is #{orderNumber}</p>
      </div>
    </>
  );
};

export default OrderHeader;
