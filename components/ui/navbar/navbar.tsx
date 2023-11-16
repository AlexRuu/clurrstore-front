import Link from "next/link";
import NavLinks from "./nav-links";
import getCategories from "@/actions/get-categories";
import { Yeseva_One } from "next/font/google";
import { cn } from "@/libs/utlils";
import RightNav from "./right-nav";

const logoFont = Yeseva_One({ weight: ["400"], subsets: ["latin"] });

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b shadow-nav py-0.5 mx-auto max-w-full overflow-visible">
      <div className="hidden md:flex relative px-4 sm:px-6 lg:px-8 h-16 items-center justify-between">
        <div className="mr-12">
          <Link
            href="/"
            className="ml-4 inline-flex items-center justify-center lg:ml-0 gap-x-2"
          >
            <div
              className={cn(
                "text-2xl text-logo tracking-[2px]",
                logoFont.className
              )}
            >
              clurr's.studio
            </div>
          </Link>
        </div>
        <NavLinks data={categories} />
        <RightNav />
      </div>
    </div>
  );
};

export default Navbar;
