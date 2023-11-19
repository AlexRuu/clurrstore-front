"use client";

import { cn } from "@/libs/utlils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  url?: string;
  title?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ url, title }) => {
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
    <div>
      {links.map((link, index) => (
        <>
          <Link
            href={link.href}
            key={link.href}
            className={cn(
              " text-[#4a4a4a] transition ease-out duration-150 hover:text-neutral-400",
              link.active ? "text-gray-950" : ""
            )}
          >
            {link.label}
          </Link>
          {index == 0 && <span className="mr-2 ml-2">/</span>}
        </>
      ))}
      {url && (
        <>
          <span className="ml-2 mr-2">/</span>
          <Link href={url}>{title}</Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
