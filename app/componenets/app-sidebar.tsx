"use client"
import * as React from "react";
import { Mail } from "lucide-react";


import logoIcon from "@/public/logo.svg";

import { SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "./ui/sidebar";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-secondaryblack gap-0" {...props}>
      <SidebarHeader className="bg-secondaryblack">
        <Link href="/">
          <Image
            className="mx-auto cursor-pointer"
            src={logoIcon}
            alt="logo"
            height={140}
            width={140}
          />
        </Link>
      </SidebarHeader>
      <SidebarContent className="gap-0 bg-secondaryblack">
        {/* We create a collapsible SidebarGroup for each parent. */}
        <div className="bg-white h-[200px] m-2 py-4 rounded-md mt-20">
          <span className="bg-accent flex px-8 items-center gap-x-6 font-semibold text-center text-xl p-3 rounded-md ">
            <Mail height={20} width={20} />
            <span className="block ">Email</span>
          </span>
        </div>
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter className="bg-secondaryblack">
        <SignOutButton>
          <button className="  text-[1.4rem] rounded-xl w-[80%] sm:w-auto font-semibold bg-accent text-secondaryblack py-3 px-14 capitalize ">
            Sign out{" "}
          </button>
        </SignOutButton>
      </SidebarFooter>
    </Sidebar>
  );
}