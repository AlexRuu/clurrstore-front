import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  productId?: string[];
  categoryId?: string[] | string;
  sort?: string;
  featured?: boolean;
}

const getProducts = async (query?: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      productId: query?.productId,
      categoryId: query?.categoryId,
      sort: query?.sort,
      featured: query?.featured,
    },
  });

  const res = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};

export default getProducts;
