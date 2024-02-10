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
    icon: <Twitter />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/clurrs.studio/",
    icon: <Instagram />,
  },
];

const Footer = () => {
  return (
    <footer className="block text-white">
      {/* md screen size and above */}
      <section className="hidden bg-[#219190] md:block">
        <section className="mx-auto p-4 md:px-8">
          <h1 className="text-center text-2xl">Let's Stay In Touch</h1>
          {/* <p>Maybe add a small description here?</p> */}
          <NewsletterForm />
        </section>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-y-16 px-16 py-8">
          <div>
            <p className="text-lg pb-2">Help</p>
            <ul className={cn("text-left text-sm", poppins_light.className)}>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div></div>
          <div className="text-left ml-auto">
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
          <div></div>
        </div>
      </section>
      {/* mobile */}
      <section className="md:hidden block bg-[#219190]">
        <section className="mx-auto p-4 md:px-8">
          <h1 className="text-center text-2xl">Let's Stay In Touch</h1>
          {/* newsletter sign up form */}
        </section>
        <div>
          <ul className="space-y-2 text-center text-2xl">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={254}
            height={254}
            className="mx-auto my-8 h-auto w-44"
            decoding="async"
          ></Image>
        </div>
        <div>
          <div className="mx-auto flex items-center justify-center gap-5 text-lg">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mt-6 pb-4 text-center">
            Copyright © 2024 Clurr's Studio
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
