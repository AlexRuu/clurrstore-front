"use client";

import { cn } from "@/libs/utlils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  title?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  const pathname = usePathname();

  const links = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/products",
      label: "Products",
      active: pathname === "/products",
    },
  ];
  return (
    <div className="">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={cn(
            " text-[#4a4a4a] transition ease-out duration-150 hover:text-neutral-400",
            link.active ? "text-gray-950" : ""
          )}
        >
          {link.label}
          {index == 0 && <span className="mr-2 ml-2">/</span>}
        </Link>
      ))}
      <>
        <span className="ml-2 mr-2">/</span>
        <p className="inline">{title}</p>
      </>
    </div>
  );
};

export default Breadcrumb;
