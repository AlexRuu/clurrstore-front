import getSearchProducts from "@/actions/get-search";
import SearchPageBar from "./components/searchBar";
import PageHeader from "@/components/ui/header";
import ProductCard from "@/components/ui/product-card";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Search`,
  };
};

const searchPage = async ({
  searchParams,
}: {
  searchParams: { [searchQuery: string]: string };
}) => {
  const searchProducts = await getSearchProducts({
    searchQuery: searchParams["q"],
  });

  return (
    <main className="min-h-[500px] mt-10 med-small:mx-5">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <PageHeader second="search" headerTitle="Search" />
        {/* Search form */}
        <SearchPageBar />
        {/* Display if there are any products retrieved from search */}
        {searchProducts.length > 0 && (
          <div className="flex w-full flex-col flex-nowrap">
            <div className="w-full text-center mb-7 items-center">
              {searchProducts.length > 1 ? (
                <h2 className="uppercase text-sm">
                  {searchProducts.length} results found
                </h2>
              ) : (
                <h2 className="uppercase text-sm">1 result found</h2>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 box-border w-full">
              {searchProducts.map((product) => (
                <ProductCard data={product} key={product.id} />
              ))}
            </div>
          </div>
        )}
        {/* Only display if there are no products found */}
        {searchParams["q"] && searchProducts.length <= 0 && (
          <div className="text-center text-2xl mt-10">
            <h1>No results found.</h1>
          </div>
        )}
      </section>
    </main>
  );
};

export default searchPage;
