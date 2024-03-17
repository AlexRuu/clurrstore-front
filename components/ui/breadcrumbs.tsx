"use client";

import { cn } from "@/libs/utlils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  second?: string;
  title?: string;
  disabled?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ second, title, disabled }) => {
  const pathname = usePathname();

  const links = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: `/${second}`,
      label: `${second}`,
      active: pathname === `${second}`,
      disabled: disabled,
    },
  ];
  return (
    <div className="items-center flex">
      {links.map((link, index) => (
        <div className="flex items-center" key={index}>
          <Link
            href={link.href}
            aria-disabled={link.disabled ? link.disabled : false}
            tabIndex={link.disabled ? -1 : undefined}
            className={cn(
              " text-gray-500 transition ease-out duration-150 hover:text-neutral-400 uppercase",
              link.active && "text-black",
              link.disabled && "pointer-events-none"
            )}
          >
            {link.label}
          </Link>
          {index == 0 && (
            <span className="mx-1" key={index}>
              <ChevronRight size={13} />
            </span>
          )}
        </div>
      ))}
      <>
        {title && (
          <>
            <span className="ml-2 mr-2">{">"}</span>
            <p className="inline uppercase">{title}</p>
          </>
        )}
      </>
    </div>
  );
};

export default Breadcrumb;
