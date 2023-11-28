import getProduct from "@/actions/get-product";
import ProductGallery from "@/components/product/product-gallery";

interface ItemPageProps {
  params: {
    productLink: string;
  };
}

const ItemPage: React.FC<ItemPageProps> = async ({ params }) => {
  const productId = params.productLink.match(
    /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/g
  );
  const product = await getProduct(productId![0]);

  return (
    <div>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-6 lg:col-span-6">
          <ProductGallery images={product.image} />
        </div>
        <div className="sm:col-span-6 lg:col-span-6">hi</div>
      </div>
    </div>
  );
};

// className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"

export default ItemPage;
