"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFeatured = () => {
    const current = qs.parse(searchParams.toString());

    const query: any = {
      ...current,
      ["featured"]: true,
    };

    if (current["sort"] != null) {
      query["sort"] = null;
    }

    if (current["featured"]) {
      query["featured"] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const handleClick = (sortBy: string) => {
    const current = qs.parse(searchParams.toString());

    const query: any = {
      ...current,
      ["sort"]: sortBy,
    };

    if (current["sort"] == sortBy) {
      query["sort"] = null;
    }

    if (current["featured"]) {
      query["featured"] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: query,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  };

  return (
    <div className="flex flex-col flex-nowrap justify-start items-start w-1/5">
      <h1>Sort by</h1>
      <button onClick={() => handleFeatured()}>Featured</button>
      <button onClick={() => handleClick("price-asc")}>
        Price: Low to High
      </button>
      <button onClick={() => handleClick("price-desc")}>
        Price: High to Low
      </button>
      <button onClick={() => handleClick("title-asc")}>Name: A to Z</button>
      <button onClick={() => handleClick("title-desc")}>Name: Z to A</button>
      <button onClick={() => handleClick("createdAt-asc")}>
        Date: Old to New
      </button>
      <button onClick={() => handleClick("createdAt-desc")}>
        Date: New to Old
      </button>
    </div>
  );
};

export default Filter;
