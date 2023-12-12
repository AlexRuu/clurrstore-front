"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useState } from "react";

const mostFilters = [
  {
    name: "Price: Low to High",
    sort: "price-asc",
  },
  {
    name: "Price: High to Low",
    sort: "price-desc",
  },
  {
    name: "Name: A to Z",
    sort: "title-asc",
  },
  {
    name: "Name: Z to A",
    sort: "title-desc",
  },
  {
    name: "Date: Old to New",
    sort: "createdAt-asc",
  },
  {
    name: "Date: New to Old",
    sort: "createdAt-desc",
  },
];

const Filter = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);
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

    setSelectedQuery(query["featured"]);
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

    setSelectedQuery(query[sortBy]);
    router.push(url);
  };

  return (
    <div className="flex flex-col flex-nowrap justify-start items-start w-1/5">
      <h1>Sort by</h1>
      <button onClick={() => handleFeatured()}>Featured</button>
      {mostFilters.map((filter, index) => (
        <button key={index} onClick={() => handleClick(filter.sort)}>
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;
