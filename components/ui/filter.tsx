"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Button from "./button";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";
import useMediaQuery from "@/hooks/use-media-query";

const Filter = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [currentQuery, setCurrentQuery] = useState<string | null>(null);
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 960px)");

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

  useEffect(() => {
    if (searchParams.get("sort") != null) {
      setCurrentQuery(searchParams.get("sort"));
    }
  }, [searchParams]);

  return (
    <>
      {!isDesktop && (
        <div className="hidden small:flex">
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button className="text-black border-[2px] rounded-md py-2 px-10">
                Sort By
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full">
              <DrawerHeader className="border-b mb-5">
                <div className="flex justify-center text-center items-center">
                  <DrawerTitle>Sort By</DrawerTitle>
                </div>
              </DrawerHeader>
              <div>
                <div className="pl-11">
                  <RadioGroup
                    defaultValue={currentQuery || "featured"}
                    onValueChange={(value) => {
                      if (value == "featured") {
                        handleFeatured();
                      } else {
                        handleClick(value);
                      }
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="featured" id="featured" />
                      <Label htmlFor="featured" className="text-lg">
                        Featured
                      </Label>
                    </div>
                    {mostFilters.map((filter) => (
                      <div
                        className="flex items-center space-x-2"
                        key={filter.name}
                      >
                        <RadioGroupItem value={filter.sort} id={filter.name} />
                        <Label htmlFor={filter.name} className="text-lg">
                          {filter.name}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <div className="text-center justify-center w-full space-x-4 flex">
                    <Button className="text-black max-w-full bg-[#F8C8DC] w-1/2">
                      Apply
                    </Button>
                  </div>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="flex flex-col flex-nowrap w-1/5 small:hidden">
        <Select
          onValueChange={(value) => {
            if (value == "featured") {
              handleFeatured();
            } else {
              handleClick(value);
            }
          }}
        >
          <SelectTrigger className="focus:ring-0">
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
      </div>
    </>
  );
};

export default Filter;
