import Filter from "@/components/ui/filter";
import PageHeader from "@/components/ui/header";
import { Metadata } from "next";
import { Suspense } from "react";
import LoadingProducts from "./loading";
import ProductsGrid from "./products-grid";

export const generateMetadata = (): Metadata => {
  return {
    title: `Products`,
  };
};

interface ProductsPageProps {
  searchParams: {
    sort: string;
    featured: boolean;
  };
}

const ProductPage: React.FC<ProductsPageProps> = ({ searchParams }) => {
  return (
    <main className="min-h-[500px] mt-10 med-small:mx-5">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        {/* Page header with breadcrumb */}
        <PageHeader second="products" headerTitle="Products" />
        {/* Filter to allow users to filter through products */}
        <div className="flex flex-shrink-0 justify-end w-full pr-3">
          <Filter />
        </div>
        {/* Display available products as clickable cards */}
        <div className="flex w-full">
          <Suspense fallback={<LoadingProducts />}>
            <ProductsGrid searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
