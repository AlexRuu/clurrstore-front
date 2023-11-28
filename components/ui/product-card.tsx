"use client";

import { Product } from "@/types";
import Image from "next/image";
import Button from "./button";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    const title = data.title.replaceAll(" ", "-");
    router.push(`/products/${title}-${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-md border p-3 space-y-4 flex flex-col justify-between group"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-sm bg-gray-100 relative overflow-hidden">
        <Image
          src={data.image?.[0].url}
          alt={data.title}
          fill
          className="aspect-square object-cover rounded-md group-hover:scale-110 transition ease-in-out duration-300"
        />
      </div>
      <div className="text-center text-lg">{data.title}</div>
      <div className="text-center font-bold text-xl">
        ${data.price.toFixed(2)}
      </div>
      <div className="text-center">
        <Button
          onClick={onPreview}
          className="bg-white text-black border border-black hover:bg-black hover:text-white rounded-lg pt-2 pb-2 hover:opacity-100"
        >
          Quick Preview
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
