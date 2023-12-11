import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import Breadcrumb from "@/components/breadcrumbs";
import Filter from "@/components/ui/filter";
import ProductCard from "@/components/ui/product-card";
import { useEffect } from "react";

interface CategoryPageProps {
  params: {
    categoryName: string;
  };
  searchParams: {
    sort: string;
    featured: boolean;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const categories = await getCategories();

  const category = categories.find((category) =>
    category.title.includes(params.categoryName.split("-", 1)[0])
  );

  const products = await getProducts({
    categoryId: category?.id,
    sort: searchParams?.sort,
    featured: searchParams?.featured,
  });

  return (
    <section className="xl:!p-[0px_85px] md:p-[0px_55px]">
      <div className="w-full mb-10 flex flex-col flex-nowrap">
        <h1 className="font-medium text-2xl flex mb-4">{category?.title}</h1>
        <Breadcrumb title={category?.title} />
      </div>
      <div className="flex w-full">
        <Filter />
        <div>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 box-border">
              {products.map((product) => (
                <ProductCard data={product} key={product.id} />
              ))}
            </div>
          ) : (
            "Add component here to say currently none available or ask claire if even going to be available"
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
