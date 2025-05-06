// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/logoWhite.svg';
import facebookIcon from '@/public/facebook.svg';
import linkedinIcon from '@/public/linkedin.svg';
import twitterIcon from '@/public/Twitter.svg';
import instagramIcon from '@/public/instagram.svg';

import Container from './Container';

const navLinks1 = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

const navLinks2 = [
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const socialIcons = [
  { src: twitterIcon, alt: 'Twitter' , href:"https://www.tiktok.com/@alie.services" },
  { src: instagramIcon, alt: 'Instagram',href:"https://www.instagram.com/alie.services/" },
  { src: facebookIcon, alt: 'Facebook' ,href:"https://www.facebook.com/people/Alie-Services/61571814239161/" },
  { src: linkedinIcon, alt: 'LinkedIn',href:"https://www.linkedin.com/company/alieservices/" },
];

const linkClass = "text-base text-white hover:text-white transition-colors duration-150";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#010133] text-white">
      <Container className="py-12 lg:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 items-center">

          {/* Column 1: Logo and Address */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="-m-1.5 p-1.5 block mb-10">
              <Image src={logo} alt="Logo" width={160} height={160} />
            </Link>
            <div className="mt-4 text-sm space-y-4">
              <div>
                <strong className="text-white">Canada:</strong><br />
                <span className="font-normal">
                  77 City Centre Drive,<br />
                  East Tower, Suite 501,<br />
                  Mississauga, Ontario, L5B1M5,<br />
                  Canada
                </span>
              </div>
              <div>
                <strong className="text-white">USA:</strong><br />
                <span className="font-normal">
                  8 The Green #8783,<br />
                  Dover, Delaware, 19901,<br />
                  USA
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:justify-self-center">
            <ul className="space-y-3">
              {navLinks1.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Links */}
          <div>
            <ul className="space-y-3">
              {navLinks2.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <span className="text-sm mb-7 block uppercase tracking-wider ">
              Connect With Us
            </span>
            <div className="flex space-x-5">
              {socialIcons.map(({ src, alt,href }, index) => (
                <Link key={index} href={href}>
                  <span key={index} className="hover:opacity-80 transition duration-150">
                    <Image src={src} alt={alt} width={25} height={25} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 text-center border-t border-white/20">
          <span className="text-sm">
            © {currentYear} Alie Services. All Rights Reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
