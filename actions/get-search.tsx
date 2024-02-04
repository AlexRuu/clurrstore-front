import qs from "query-string";
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/search`;

interface Query {
  searchQuery?: string;
}

const getSearchProducts = async (query?: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      searchQuery: query?.searchQuery,
    },
  });
  const res = await fetch(url);

  return res.json();
};

export default getSearchProducts;
