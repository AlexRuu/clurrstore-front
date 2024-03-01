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
  });

  if (!isMounted) {
    return null;
  }

  const totalPrice = order.orderItem.reduce((acc, current) => {
    // @ts-expect-error
    if (current.product.style == "B Grade (-C$2.00)") {
      const newPrice = Number(current.product.price) - 2;
      return acc + newPrice * current.quantity;
    }
    return acc + Number(current.product.price * current.quantity);
  }, 0);

  return (
    <div className="w-full flex flex-row-reverse">
      <div className="">Subtotal: ${totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default OrderTotal;
