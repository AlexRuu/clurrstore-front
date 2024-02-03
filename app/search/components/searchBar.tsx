"use client";

import SearchForm from "@/components/forms/search-form";

const SearchPageBar = () => {
  return (
    <div className="flex justify-center flex-row w-full">
      <SearchForm className="border rounded-full" page={true} />
    </div>
  );
};

export default SearchPageBar;
