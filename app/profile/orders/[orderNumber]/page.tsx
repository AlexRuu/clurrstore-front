import getOrder from "@/actions/get-order";
import ProfileOrderHeader from "./components/profile-order-header";
import ProfileOrderPersonalDetails from "./components/profile-order-personal";
import ProfileOrderSummary from "./components/profile-order-summary";
import ProfileOrderTotal from "./components/profile-order-total";

interface ProfileOrderDetailsProps {
  params: {
    orderNumber: string;
  };
}

const ProfileOrderDetails: React.FC<ProfileOrderDetailsProps> = async ({
  params,
}) => {
  const order = await getOrder(params.orderNumber);

  return (
    <main className="min-h-[500px] mt-10 med-small:mx-5">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <div className="flex justify-center w-full items-center flex-col flex-nowrap">
          <ProfileOrderHeader orderNumber={params.orderNumber} />
          <ProfileOrderPersonalDetails order={order} />
          <ProfileOrderSummary order={order} />
          <ProfileOrderTotal order={order} />
        </div>
      </section>
    </main>
  );
};

export default ProfileOrderDetails;
