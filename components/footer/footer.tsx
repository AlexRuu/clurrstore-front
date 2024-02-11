"use client";

import { Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { poppins_light } from "@/app/font";
import { cn } from "@/lib/utils";
import NewsletterForm from "../forms/newsletter-form";

const footerLinks = [
  {
    label: "About Me",
    href: "/about",
  },
  { label: "Refund Policy", href: "/refund" },
  { label: "Delivery Policy", href: "/delivery" },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/clurrsstudio",
    icon: <Twitter className="hover:scale-110" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/clurrs.studio/",
    icon: <Instagram className="hover:scale-110" />,
  },
];

const Footer = () => {
  return (
    <footer className="block text-white">
      {/* md screen size and above */}
      <section className="hidden bg-[#219190] md:block">
        <section className="mx-auto p-4 md:px-8 justify-center items-center w-1/2">
          <h1 className="text-center text-2xl">Let's Stay In Touch!</h1>
          <p className="text-sm text-center">
            Sign up for the latest updates on my art projects!
          </p>
          <NewsletterForm />
        </section>
        <div className="grid grid-cols-[1fr_auto_1fr] med-small:grid-cols-2 gap-y-16 px-16 py-8">
          <div className="med-small:w-1/2">
            <p className="text-lg pb-2">Help</p>
            <ul className={cn("text-left text-sm", poppins_light.className)}>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="med-small:hidden" />
          <div className="text-left ml-auto med-small:w-1/2">
            <p className={cn("pb-2 text-lg", poppins_light.className)}>
              Socials
            </p>
            <div className="ml-auto flex w-64 gap-5 text-lg">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="self-end text-xs">Copyright © 2024 Clurr's Studio</p>
          </div>
          <div />
          <div />
        </div>
      </section>
      {/* mobile */}
      <section className="md:hidden block bg-[#219190]">
        <section className="mx-auto p-4 md:px-8">
          <h1 className="text-center text-2xl">Let's Stay In Touch</h1>
          <p className="text-sm text-center">
            Sign up for the latest updates on my art projects!
          </p>
          <NewsletterForm />
        </section>
        <hr className="w-11/12 opacity-50 h-1 mx-auto" />
        <div className="grid grid-cols-2">
          <div className="pl-4">
            <p className="text-lg py-2">Help</p>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <p className="pb-2 text-lg py-2">Socials</p>
            <div className="mx-auto flex gap-5 text-lg">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="mt-6 pb-4 text-center text-xs">
            Copyright © 2024 Clurr's Studio
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
