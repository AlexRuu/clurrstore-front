import getCategories from "@/actions/get-categories";
import NavMain from "./nav-main";
import { createClient } from "@/libs/supabase/server";
import getProfile from "@/actions/get-profile";

const Navbar = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  const categories = await getCategories();

  return <NavMain data={categories} profile={data.user?.id ? true : false} />;
};

export default Navbar;
