import PageHeader from "@/components/ui/header";
import { Metadata } from "next";
import { poppins_light } from "../font";
import { cn } from "@/libs/utlils";
import Link from "next/link";

export const generateMetadata = (): Metadata => {
  return {
    title: `Refund Policy`,
  };
};

const RefundPage = () => {
  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <PageHeader headerTitle="Refund Policy" second="refund" />
        <div className="flex justify-center items-center text-left w-full">
          <p className={cn("mx-32 w-1/3", poppins_light)}>
            If you are unsatisfied with your order, I am happy to discuss refund
            and return options within 30 days of your initial order! Feel free
            to send me an email at&nbsp;
            <span className="text-blue-400 hover:underline">
              <Link href={"mailto:clurrs.studio@hotmail.com"}>
                clurrs.studio@hotmail.com
              </Link>
            </span>
            <br />
            <br />
            <span className="font-bold">Please Note: </span>I unfortunately
            won't be accepting any returns or refund of custom works.
          </p>
        </div>
      </section>
    </main>
  );
};

export default RefundPage;
