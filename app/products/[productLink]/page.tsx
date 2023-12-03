import getProduct from "@/actions/get-product";
import Breadcrumb from "@/components/breadcrumbs";
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
    <main className="min-h-[500px]">
      <section>
        <Breadcrumb title={product.title} url={product.title} />
        <div className="flex items-start md:flex-row md:flex-nowrap md:justify-center md:pt-2 md:px-4 md:pb-10 justify-start flex-col flex-nowrap pt-0 px-0 pb-10 w-full">
          <ProductGallery images={product.image} />
          <div className="md:max-w-[400px] md:pt-0 flex flex-col flex-nowrap flex-shrink px-4 py-0 w-full">
            hi
          </div>
        </div>
      </section>
    </main>
  );
};

export default ItemPage;
