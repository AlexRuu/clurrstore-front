import getSearchProducts from "@/actions/get-search";
import SearchPageBar from "./components/searchBar";
import PageHeader from "@/components/ui/header";
import ProductCard from "@/components/ui/product-card";

const searchPage = async ({
  searchParams,
}: {
  searchParams: { [searchQuery: string]: string };
}) => {
  const searchProducts = await getSearchProducts({
    searchQuery: searchParams["q"],
  });

  console.log(searchProducts);
  return (
    <div>
      <PageHeader second="search" headerTitle="Search" />
      <SearchPageBar />
      {searchProducts.length > 0 ? (
        <div>
          {searchProducts.map((product) => (
            <ProductCard data={product} />
          ))}
        </div>
      ) : (
        <div>
          <h1>No results found...</h1>
        </div>
      )}
    </div>
  );
};

export default searchPage;
