import { Order } from "@/types";
import Link from "next/link";
import { format } from "date-fns";

interface OrderItemProps {
  order: Order;
}

const OrderItemInfo: React.FC<OrderItemProps> = ({ order }) => {
  const orderDate = format(order.createdAt, "PPPP");

  return (
    <>
      <div className="mb-3">
        <p>#{order.orderNumber}</p>
      </div>
      <div className="text-center mb-3">
        <p>{orderDate}</p>
      </div>
      <div className="text-center mb-3">
        <p>${order.total.toFixed(2)}</p>
      </div>
      <div className="text-center mb-3">
        {order.isPaid ? <p>Paid</p> : <p>Not Paid</p>}
      </div>
      <div className="text-center mb-3">
        <p>
          <Link
            href={`/profile/orders/${order.orderNumber}`}
            className="text-blue-500"
          >
            View
          </Link>
        </p>
      </div>
    </>
  );
};

export default OrderItemInfo;
