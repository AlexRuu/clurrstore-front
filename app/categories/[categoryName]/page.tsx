import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import Filter from "@/components/ui/filter";
import PageHeader from "@/components/ui/header";
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
  // Retrieve category data from database
  const categories = await getCategories();

  // Clean up category title
  const category = categories.find((category) =>
    category.title
      .toLowerCase()
      .includes(params.categoryName.toLowerCase().split("-", 1)[0])
  );

  // Fetch products by category and sort params
  const products = await getProducts({
    categoryId: category?.id,
    sort: searchParams?.sort,
    featured: searchParams?.featured,
  });

  return (
    <main className="min-h-[500px] mt-10 med-small:mx-5">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        {/* Page header with breadcrumb */}
        <PageHeader
          second="products"
          title={category?.title}
          headerTitle={category?.title}
        />
        {/* Filter component to allow users to filter products */}
        <div className="flex flex-shrink-0 justify-end w-full pr-3">
          <Filter />
        </div>
        {/* If products, display */}
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
