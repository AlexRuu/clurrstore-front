import getProducts from "@/actions/get-products";
import Breadcrumb from "@/components/breadcrumbs";
import Filter from "@/components/ui/filter";
import ProductCard from "@/components/ui/product-card";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Products`,
  };
};

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
    <main className="min-h-[500px] mt-10">
      <section className="xl:!p-[0px_85px] md:p-[0px_55px]">
        <Breadcrumb />
        <div className="w-full mb-10 flex justify-center flex-nowrap">
          <h1 className="font-medium text-2xl flex mb-4">Products</h1>
        </div>
        <div className="flex flex-shrink-0 justify-end w-full pr-3">
          <Filter />
        </div>
        <div className="flex w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 box-border w-full">
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
