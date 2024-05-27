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
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="w-full h-6 border-b-[1px] border-primary p-10 flex items justify-between items-center">
      <Link href="/">
        <h1 className="text-[30px] font-bold">
          Notes<span className="text-primary">App</span>
        </h1>
      </Link>
      <div className="flex gap-3 items-center">
        <ModeToggle />

        {(await isAuthenticated()) ? (
          <div>
            {/* <LogoutLink>
              <Button>Log out</Button>
            </LogoutLink> */}
            <UserProfile name={user?.given_name as string} email={user?.email as string} image={user?.picture as string}/>
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
