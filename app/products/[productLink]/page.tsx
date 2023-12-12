import getDesign from "@/actions/get-design";
import getProduct from "@/actions/get-product";
import ProductGallery from "@/components/product/product-gallery";
import ProductInfo from "@/components/product/product-info";
import { notFound } from "next/navigation";
interface ItemPageProps {
  params: {
    productLink: string;
  };
}

const ItemPage: React.FC<ItemPageProps> = async ({ params }) => {
  const productId = params.productLink.match(
    /[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/g
  );
  if (!productId) {
    return notFound();
  }

  const product = await getProduct(productId![0]);

  return (
    <section className="mt-10">
      <div className="lg:pt-2 lg:px-14 lg:pb-10 flex items-start md:flex-row md:flex-nowrap md:justify-center md:pt-2 md:px-4 md:pb-10 justify-start flex-col flex-nowrap pt-0 px-0 pb-10 w-full gap-10">
        <ProductGallery images={product.image} />
        <div className="md:max-w-[500px] md:pt-0 flex flex-col flex-nowrap flex-shrink px-4 py-0 w-full">
          <ProductInfo product={product} />
        </div>
      </div>
    </section>
  );
};

export default ItemPage;
