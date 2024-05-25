"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent } from "./ui/dropdown-menu";
import Link from "next/link";
import {
  LogoutLink
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Avatar>
            <AvatarImage src="" alt="@shadcn" className="w-[20px]" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <LogoutLink>
            Log out
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
