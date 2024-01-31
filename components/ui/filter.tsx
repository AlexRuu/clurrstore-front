"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "./select";

const Filter = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();

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
    <div className="flex flex-col flex-nowrap w-1/5">
      <Select
        onValueChange={(value) => {
          if (value == "featured") {
            handleFeatured();
          } else {
            handleClick(value);
          }
        }}
      >
        <SelectTrigger className="focus-visible:ring-0">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort By</SelectLabel>
            <SelectItem value="featured">Featured</SelectItem>
            {mostFilters.map((filter) => (
              <SelectItem value={filter.sort} key={filter.name}>
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* <button onClick={() => handleFeatured()}>Featured</button>
      {mostFilters.map((filter, index) => (
        <button key={index} onClick={() => handleClick(filter.sort)}>
          {filter.name}
        </button>
      ))} */}
    </div>
  );
};

export default Filter;
