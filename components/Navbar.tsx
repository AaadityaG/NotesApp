import React from "react";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserProfile from "./UserProfile";

const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <div className="w-full h-6 border-b-[1px] p-10 flex items justify-between items-center">
      <Link href="/">
        <h1 className="text-[30px] font-bold">
          Note<span className="text-primary">App</span>
        </h1>
      </Link>
      <div className="flex gap-3">
        <ModeToggle />

        {(await isAuthenticated()) ? (
          <div>
            {/* <LogoutLink>
              <Button>Log out</Button>
            </LogoutLink> */}
            <UserProfile />
          </div>
        ) : (
          <div className="flex gap-3">
            <LoginLink>
              <Button>Sign in</Button>
            </LoginLink>
            <RegisterLink>
              <Button variant="secondary">Sign Up</Button>
            </RegisterLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
