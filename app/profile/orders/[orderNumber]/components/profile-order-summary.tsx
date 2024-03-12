"use client";

import { Order } from "@/types";
import ProfileOrderItem from "./profile-order-item";

interface OrderSummaryProps {
  order: Order;
}

const ProfileOrderSummary: React.FC<OrderSummaryProps> = ({ order }) => {
  return (
    <div className="w-full mt-10 med-small:px-10">
      <h2 className="text-center text-2xl">Order Summary</h2>
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
          {order.orderItem.map((item) => (
            <ProfileOrderItem
              key={item.id}
              product={item.product}
              design={item.design}
              style={item.style}
              quantity={item.quantity}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileOrderSummary;
