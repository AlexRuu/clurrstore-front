import getProducts from "@/actions/get-products";
import Filter from "@/components/ui/filter";
import ProductCard from "@/components/ui/product-card";

interface ProductPageProps {
  searchParams: {
    sort: string;
    featured: boolean;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ searchParams }) => {
  const products = await getProducts({
    sort: searchParams?.sort,
    featured: searchParams?.featured,
  });

  return (
    <main className="min-h-[500px] mt-24">
      <section className="xl:!p-[0px_85px] md:p-[0px_55px]">
        <div className="flex">
          <Filter />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 box-border">
            {products.map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
