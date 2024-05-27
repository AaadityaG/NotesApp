"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function UserProfile({name, email, image} : {name: string, email: string, image:string}) {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild >
        {/* <Button> */}
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={image}
            alt="@shadcn"
            className="w-[40px] h-[40px] rounded-full cursor-pointer border-2 border-primary"
          />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        {/* </Button> */}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>
          <h1 className="opacity-60" >{name}</h1>
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          {/* <Link href="/dashboard">
            Dashboard
          </Link> */}
          <p className="opacity-60">{email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <LogoutLink>Log out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
