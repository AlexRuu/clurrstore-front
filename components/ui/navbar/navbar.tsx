import getCategories from "@/actions/get-categories";
import NavMain from "./nav-main";

const Navbar = async () => {
  const categories = await getCategories();

  return <NavMain data={categories} />;
};

export default Navbar;
