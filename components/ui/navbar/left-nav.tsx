import { cn } from "@/libs/utlils";
import Image from "next/image";
import Link from "next/link";
import { Yeseva_One } from "next/font/google";

const logoFont = Yeseva_One({ weight: ["400"], subsets: ["latin"] });

interface LeftNavProps {
  mobileOpen?: boolean;
}

const LeftNav: React.FC<LeftNavProps> = ({ mobileOpen }) => {
  return (
    <div
      className={cn(
        "absolute justify-end flex items-center left-16",
        scrollY! >= 160 && "lg:left-18 xl:left-24",
        mobileOpen && "hidden"
      )}
    >
      <h1
        className={cn(
          "med-small:block med-small:ml-[10px] med-small:p-0 med-small:mr-auto med-small:flex-grow med-small:text-left text-logo max-w-[280px]",
          logoFont.className
        )}
      >
        <Link
          href={"/"}
          className="flex items-center med-small:flex-row med-small:text-xl text-xl"
        >
          <Image
            src={"/static/images/logo.png"}
            alt=""
            height={0}
            width={0}
            sizes="100vw"
            priority
            className="med-small:h-14 med-small:w-14 w-10 h-10 med-small:mr-2"
          />
        </Link>
      </h1>
    </div>
  );
};

export default LeftNav;
