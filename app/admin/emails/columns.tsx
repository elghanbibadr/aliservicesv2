"use client";

import { deleteEmail } from "@/app/actions/actions";
import { Button } from "@/app/componenets/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";

// Define the new type for emails
export type EmailType = {
  id: string;
  userName: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
};

export const columns: ColumnDef<EmailType>[] = [
  {
    accessorKey: "username",
    header: "User Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "businessType",
    header: "Business Type",
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const email = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
      
            <DropdownMenuItem
              onClick={() =>deleteEmail(email.id)}
            >
            <span className="bg-red-400 p-2 px-6 text-white text-base cursor-pointer font-medium rounded-md">Delete Email</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];