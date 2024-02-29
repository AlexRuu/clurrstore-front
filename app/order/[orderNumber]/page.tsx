import getOrder from "@/actions/get-order";
import OrderHeader from "./components/order-header";
import OrderSummary from "./components/order-summary";

type OrderCompletedPageProps = {
  params: { orderNumber: string };
};

const OrderCompletedPage: React.FC<OrderCompletedPageProps> = async ({
  params,
}) => {
  const order = await getOrder(params.orderNumber);
  console.log(order.orderItem);
  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <div className="flex justify-center w-full items-center flex-col flex-nowrap">
          <OrderHeader orderNumber={params.orderNumber} />
          <OrderSummary />
        </div>
      </section>
    </main>
  );
};

export default OrderCompletedPage;
