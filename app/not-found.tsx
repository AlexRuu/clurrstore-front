import PageHeader from "@/components/ui/header";
import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = (): Metadata => {
  return {
    title: `Page Not Found`,
  };
};
const NotFoundPage = () => {
  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <PageHeader headerTitle="Page Not Found" second="Error" />
        <div className="flex justify-center items-center text-left w-full flex-col">
          <h2 className="text-lg mb-5">
            The page you are looking for does not exist!
          </h2>
          <Link
            href="/"
            className="text-center rounded-full px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition text-black small:text-center w-auto border bg-[#e2ecf2] hover:shadow-home-button hover:-translate-y-[3px] hover:brightness-95 uppercase"
          >
            Back To Store
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
