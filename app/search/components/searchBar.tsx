"use client";

import SearchForm from "@/components/forms/search-form";

const SearchPageBar = () => {
  return (
    <div className="flex justify-center flex-row text-center my-7">
      <SearchForm className="border rounded-full pl-2" page={true} />
    </div>
  );
};

export default SearchPageBar;
