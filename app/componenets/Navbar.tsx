"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Faq", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ];

  const linkClass = (href: string) =>
    `block  px-3 py-2 text-[0.875rem] leading-[24px] tracking-normal text-text transition-all ${
      pathname === href
        ? "border-b-2 border-blue-600 font-semibold"
        : "hover:border-b hover:border-b-2 hover:border-blue-600"
    }`;

  return (
    <div>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src={logo}
                alt="ali services logo"
                height={160}
                width={160}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/contact">
            <button className="bg-transparent border-[1px] border-lightBlue text-lightBlue">Contact Us</button>
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image src={logo} alt="Logo" width={80} height={80} />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block  px-3 py-2 text-[0.875rem] leading-[24px] tracking-normal text-text  ${
                        pathname === link.href ? "font-semibold text-blue-600" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                <Link href="/contact">
            <button className="bg-transparent border-[1px] border-lightBlue text-lightBlue">Contact Us</button>
            </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
