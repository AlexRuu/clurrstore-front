import { Profile } from "@/types";
import OrderItemInfo from "./order-item-info";
import { poppins_bold } from "@/app/font";
import { cn } from "@/libs/utlils";
import MobileOrderInfo from "./mobile-order-info";

interface ProfileOrderInfoProps {
  orders: Profile["order"];
}

const ProfileOrderInfo: React.FC<ProfileOrderInfoProps> = ({ orders }) => {
  return (
    <div>
      <h1 className="text-2xl">Orders</h1>
      {/* Need order number, payment status, total payment, date of order, a view order tab */}
      {orders.length > 0 ? (
        <div>
          <div className="med-small:hidden">
            <div className="grid grid-cols-[25%_25%_20%_20%_10%] border-b border-t border-[#f3f3f3] py-5 mb-5">
              <div>
                <h4 className={cn("text-lg", poppins_bold.className)}>
                  Order Number
                </h4>
              </div>
              <div className="text-center">
                <h4 className={cn("text-lg", poppins_bold.className)}>
                  Order Date
                </h4>
              </div>
              <div className="text-center">
                <h4 className={cn("text-lg", poppins_bold.className)}>
                  Order Total
                </h4>
              </div>
              <div className="text-center">
                <h4 className={cn("text-lg", poppins_bold.className)}>
                  Payment Status
                </h4>
              </div>
              <div className="text-center">
                <h4 className={cn("text-lg", poppins_bold.className)}>
                  Details
                </h4>
              </div>
            </div>
            <div className="grid grid-cols-[25%_25%_20%_20%_10%]">
              {orders.map((order) => (
                <OrderItemInfo order={order} key={order.id} />
              ))}
            </div>
          </div>
          <div className="medium-min:hidden">
            {orders.map((order) => (
              <MobileOrderInfo order={order} key={order.id} />
            ))}
          </div>
        </div>
      ) : (
        <div>You haven't placed any orders yet.</div>
      )}
    </div>
  );
};

export default ProfileOrderInfo;
