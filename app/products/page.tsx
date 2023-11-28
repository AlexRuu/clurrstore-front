import getProducts from "@/actions/get-products";
import ProductCard from "@/components/ui/product-card";

const ProductPage = async () => {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 box-border">
      {products.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductPage;
