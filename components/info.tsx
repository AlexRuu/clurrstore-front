import { Product } from "@/types";
import Currency from "./ui/currency";
import ProductForm from "./forms/product-form";

interface PreviewInfoProps {
  product: Product;
}

const PreviewInfo: React.FC<PreviewInfoProps> = ({ product }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={product?.price} />
        </div>
      </div>
      <hr className="my-4 bg-neutral-300" />
      <div className="flex flex-col h-full">
        <ProductForm
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image[0]}
          styleId={product.styleId}
          designId={product.designId}
          design={product.design}
          style={product.style}
        />
      </div>
    </div>
  );
};

export default PreviewInfo;
