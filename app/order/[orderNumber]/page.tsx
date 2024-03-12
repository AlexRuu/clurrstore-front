import getOrder from "@/actions/get-order";
import OrderHeader from "./components/order-header";
import OrderSummary from "./components/order-summary";
import OrderTotal from "./components/order-total";
import OrderPersonalDetails from "./components/order-personal-detail";
import { Metadata } from "next";

type OrderCompletedPageProps = {
  params: { orderNumber: string };
};

export const generateMetadata = (): Metadata => {
  return {
    title: `Order Confirmed`,
  };
};

const OrderCompletedPage: React.FC<OrderCompletedPageProps> = async ({
  params,
}) => {
  // Get order
  const order = await getOrder(params.orderNumber);

  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <div className="flex justify-center w-full items-center flex-col flex-nowrap">
          {/* Order header  */}
          <OrderHeader orderNumber={params.orderNumber} />
          {/* Customer details pertaining to order */}
          <OrderPersonalDetails order={order} />
          {/* Summary of items in order */}
          <OrderSummary order={order} />
          {/* Summary of the order totals */}
          <OrderTotal order={order} />
        </div>
      </section>
    </main>
  );
};

export default OrderCompletedPage;
