"use client";

import { Product } from "@/types";
import ProductForm from "../forms/product-form";
import { useState } from "react";
import Breadcrumb from "../breadcrumbs";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="overflow-y-hidden w-full">
      <div>
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <Breadcrumb title={product.title} />
        <p className="text-xl">${product.price.toFixed(2)}</p>
        <br />
      </div>
      <div>
        <ProductForm
          id={product.id}
          design={product.design}
          style={product.style}
          styleId={product.styleId}
          designId={product.designId}
        />
      </div>
      <div>
        <br />
        <p className="font-medium">Details</p>
        <p>{product.description}</p>
        <br />
        <p className="font-medium">About This Item</p>
        <ul>
          {product.detail.map((point, index) => (
            <li className="list-disc ml-4" key={index}>
              {point.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
