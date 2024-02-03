import getProducts from "@/actions/get-products";
import Breadcrumb from "@/components/breadcrumbs";
import Filter from "@/components/ui/filter";
import PageHeader from "@/components/ui/header";
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
    <main className="min-h-[500px] mt-10 med-small:mx-5">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <PageHeader second="products" headerTitle="Products" />
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
