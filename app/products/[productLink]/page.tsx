import getProduct from "@/actions/get-product";
import ProductGallery from "@/components/product/product-gallery";
import ProductInfo from "@/components/product/product-info";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import MobileGallery from "@/components/product/product-gallery-mobile";

type Props = {
  params: { productLink: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const productReg = params.productLink.match(/([A-Z])\w+/g);
  const productName = productReg?.join(" ");
  return {
    title: `${productName}`,
  };
};
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
    <main className="min-h-[500px]">
      <section className="mt-10 small:mt-0">
        <div className="md:flex-row md:flex-nowrap md:justify-center md:p-[8px_16px_40px] items-start flex flex-col flex-nowrap justify-start p-[0_0_40px] w-full">
          <div className="small:p-5 w-full md:flex-row md:flex">
            <MobileGallery images={product.image} />
            <ProductGallery images={product.image} />
            <div className="md:max-w-[500px] md:pt-0 flex flex-col flex-nowrap flex-shrink px-4 py-0 w-full">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ItemPage;
