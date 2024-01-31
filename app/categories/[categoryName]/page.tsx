import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import Breadcrumb from "@/components/breadcrumbs";
import Filter from "@/components/ui/filter";
import ProductCard from "@/components/ui/product-card";
import { Metadata } from "next";

type Props = {
  params: { categoryName: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const category = params.categoryName.replaceAll("-", " ");
  return {
    title: `${category}`,
  };
};

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
    <main className="min-h-[500px] mt-5">
      <section className="xl:!p-[0px_85px] md:p-[0px_55px]">
        <Breadcrumb title={category?.title} />
        <div className="w-full mb-10 flex justify-center flex-nowrap">
          <h1 className="font-medium text-2xl flex mb-4">{category?.title}</h1>
        </div>
        <div className="flex flex-shrink-0 justify-end w-full pr-3">
          <Filter />
        </div>
        <div className="flex w-full">
          <div className="w-full">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 box-border w-full">
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
    </main>
  );
};

export default CategoryPage;
