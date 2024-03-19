import getSearchProducts from "@/actions/get-search";
import ProductCard from "@/components/product/product-card";

const LoadedProducts = async ({
  searchParams,
}: {
  searchParams: { [searchQuery: string]: string };
}) => {
  const searchProducts = await getSearchProducts({
    searchQuery: searchParams["q"],
  });

  return (
    <div>
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
      {searchParams["q"] && searchProducts.length <= 0 && (
        <div className="text-center text-2xl mt-10">
          <h1>No results found.</h1>
        </div>
      )}
    </div>
  );
};

export default LoadedProducts;
