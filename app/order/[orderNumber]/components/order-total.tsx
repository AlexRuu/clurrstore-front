"use client";

import { Order } from "@/types";
import { useEffect, useState } from "react";

interface OrderTotalProps {
  order: Order;
}

const OrderTotal: React.FC<OrderTotalProps> = ({ order }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const totalPrice = order.orderItem.reduce((acc, current) => {
    if (current.style?.title == "B Grade (-C$2.00)") {
      const newPrice = Number(current.product.price) - 2;
      return acc + newPrice * current.quantity;
    }
    return acc + Number(current.product.price * current.quantity);
  }, 0);

  return (
    <div className="w-full flex flex-row-reverse med-small:mr-20 medium-min:px-20">
      <div className="flex med-small:justify-between med-small:w-full med-small:pl-20">
        <div className="mr-5">
          <p className="text-base">Subtotal: </p>
          <p className="text-base">Shipping: </p>
          <p className="text-base">Tax: </p>
          <p className="text-xl">Total: </p>
        </div>
        <div>
          <p className="text-base text-right">${totalPrice.toFixed(2)}</p>
          <p className="text-base text-right">${order.shipping.toFixed(2)}</p>
          <p className="text-base text-right">${order.tax.toFixed(2)}</p>
          <p className="text-xl text-right">${order.total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderTotal;
