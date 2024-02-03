import Breadcrumb from "@/components/breadcrumbs";
import SearchPageBar from "./components/searchBar";

const searchPage = () => {
  return (
    <div>
      <div className="med-small:ml-[9px] ml-3 text-xs">
        <Breadcrumb />
      </div>
      <div className="w-full mb-10 flex justify-center flex-nowrap">
        <h1 className="font-medium text-2xl flex mb-4">Products</h1>
      </div>
      <SearchPageBar />
    </div>
  );
};

export default searchPage;
