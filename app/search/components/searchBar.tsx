"use client";

import SearchForm from "@/components/forms/search-form";

const SearchPageBar = () => {
  return (
    <div className="flex justify-center flex-row text-center my-7">
      {/* Search bar form to handle input */}
      <SearchForm className="border rounded-full pl-2" page={true} />
    </div>
  );
};

export default SearchPageBar;
