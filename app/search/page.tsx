import getSearchProducts from "@/actions/get-search";
import SearchPageBar from "./components/searchBar";
import PageHeader from "@/components/ui/header";
import ProductCard from "@/components/ui/product-card";

const searchPage = async ({
  searchParams,
}: {
  searchParams: { [searchQuery: string]: string };
}) => {
  let searchProducts;
  if (searchParams["q"]) {
    searchProducts = await getSearchProducts({
      searchQuery: searchParams["q"],
    });
  }

  return (
    <main className="min-h-[500px] mt-10 med-small:mx-5">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <PageHeader second="search" headerTitle="Search" />
        <SearchPageBar />
        {searchProducts ? (
          <div className="flex w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 box-border w-full">
              {searchProducts.map((product) => (
                <ProductCard data={product} key={product.id} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1>No results found...</h1>
          </div>
        )}
      </section>
    </main>
  );
};

export default searchPage;
