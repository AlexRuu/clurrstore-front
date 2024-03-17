import PageHeader from "@/components/ui/header";
import { poppins_light } from "../font";
import { Metadata } from "next";
import { cn } from "@/libs/utlils";

export const generateMetadata = (): Metadata => {
  return {
    title: `Delivery Policy`,
  };
};

const DeliveryPage = () => {
  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <PageHeader headerTitle="Delivery Policy" second="delivery" />
        <div className="flex justify-center items-center w-full">
          <p className={cn("mx-32 w-1/2 text-center text-xl", poppins_light)}>
            Delivery times vary depending on your selected delivery address,
            availability of your items, and the time of the day you place your
            order.
            <br />
            <br />
            Process time range between 3-5 business days. My personal website is
            only shipping to U.S. and Canada, but feel free to hop over to my
            Etsy Shop for international orders!
          </p>
        </div>
      </section>
    </main>
  );
};

export default DeliveryPage;
