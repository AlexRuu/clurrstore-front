import { Order } from "@/types";
import Link from "next/link";
import { format } from "date-fns";
import { poppins_bold } from "@/app/font";

interface OrderItemProps {
  order: Order;
}

const MobileOrderInfo: React.FC<OrderItemProps> = ({ order }) => {
  const orderDate = format(order.createdAt, "PPPP");

  return (
    <div className="border rounded-[10px] grid grid-cols-2">
      <div className="mb-3 mt-2 ml-2">
        <h6 className={poppins_bold.className}>Order Number</h6>
        <Link
          href={`/profile/orders/${order.orderNumber}`}
          className="text-blue-500"
        >
          #{order.orderNumber}
        </Link>
      </div>
      <div className="mb-3 mt-2">
        <h6 className={poppins_bold.className}>Date</h6>
        <p className="text-sm">{orderDate}</p>
      </div>
      <div className="ml-2 mb-2">
        <h6 className={poppins_bold.className}>Total</h6>
        <p className="text-sm">${order.total.toFixed(2)}</p>
      </div>
      <div className="mb-2">
        <h6 className={poppins_bold.className}>Status</h6>
        {order.isPaid ? (
          <p className="text-sm">Paid</p>
        ) : (
          <p className="text-sm">Not Paid</p>
        )}
      </div>
    </div>
  );
};

export default MobileOrderInfo;
