"use client"
import React from "react";
import CallToAction from "./CallToAction";
import Footer from "./ui/Footer";
import { usePathname } from "next/navigation";

const ConditionalFooterAndCta = () => {
  const pathname = usePathname();

  // Check if the current path starts with /admin
  const isAdminPath = pathname?.startsWith("/admin");

  // If it's an admin path, render nothing (or null)
  if (isAdminPath) {
    return null;
  }

  return (
    <>
      <CallToAction />
      <Footer />
    </>
  );
};

export default ConditionalFooterAndCta;
