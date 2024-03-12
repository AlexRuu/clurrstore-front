"use client";

import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const title = data.title.replaceAll(" ", "-");

  return (
    <div className="bg-white group cursor-pointer rounded-md p-3 space-y-4 flex flex-col justify-between group">
      <Link href={`/products/${title}-${data.id}`}>
        <div className="aspect-square rounded-sm bg-gray-100 relative overflow-hidden">
          <Image
            src={data.image?.[0].url}
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="aspect-square object-cover rounded-md group-hover:scale-110 transition ease-in-out duration-300"
          />
        </div>
        <div className="text-center text-lg">{data.title}</div>
        <div className="text-center font-bold text-xl">
          ${data.price.toFixed(2)}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
