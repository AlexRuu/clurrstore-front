import { Suspense } from "react";
import SearchPageBar from "./components/searchBar";
import PageHeader from "@/components/ui/header";
import { Metadata } from "next";
import SearchLoading from "./loading";
import LoadedProducts from "./loaded-products";

export const generateMetadata = (): Metadata => {
  return {
    title: `Search`,
  };
};

interface SearchPageProps {
  searchParams: {
    q: string;
  };
}

const searchPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  return (
    <main className="min-h-[500px] mt-10 med-small:mx-5">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <PageHeader second="search" headerTitle="Search" />
        {/* Search form */}
        <SearchPageBar />
        {/* Display if there are any products retrieved from search */}
        <Suspense fallback={<SearchLoading />}>
          <LoadedProducts searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  );
};

export default searchPage;
