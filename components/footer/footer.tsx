import { Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <footer className="block">
      {/* md screen size and above */}
      <section className="hidden bg-[#219190] md:block">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-y-16 px-16 py-8">
          <div>
            <ul className="text-left text-2xl">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <section className="mx-auto p-4 md:px-8">
              <h1 className="text-center font-vt323 text-4xl">
                Let's Stay In Touch
              </h1>
              {/* <p>Maybe add a small description here?</p> */}
              {/* newsletter signup forn */}
            </section>
          </div>
          <div>
            <Image
              src="/images/logo.png"
              alt="logo"
              height={254}
              width={254}
              decoding="async"
              className="ml-auto h-auto w-64"
            ></Image>
          </div>
          <div>
            <p className="self-end">Copyright © 2024 Clurr's Studio</p>
          </div>
          <div />
          <div>
            <div className="ml-auto flex w-64 items-center justify-center gap-5 text-lg">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
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
