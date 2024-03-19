import getProducts from "@/actions/get-products";
import ProductCard from "@/components/product/product-card";

interface ProductsGridProps {
  searchParams: {
    sort: string;
    featured: boolean;
  };
}

const ProductsGrid: React.FC<ProductsGridProps> = async ({ searchParams }) => {
  const products = await getProducts({
    sort: searchParams?.sort,
    featured: searchParams?.featured,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 box-border w-full">
      {products.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsGrid;
