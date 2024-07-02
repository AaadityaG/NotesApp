import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import Illu from "./../public/illu.svg"
import {RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";


export const Hero = async () => {

  const {getUser, isAuthenticated} = getKindeServerSession();

  const isAuth = await isAuthenticated();

  return (
    <section className="container  flex  items-center justify-center py-20 px-10 md:py-32 lg:py-35 gap-4">
      <div className="text-center lg:text-center space-y-6 flex flex-col items-center w-full">
        <main className="text-5xl md:text-6xl font-bold ">
          <h1 className="inline">
            Maintain {" "} your{" "} 
            <span className="bg-clip-text">
             tasks
            </span>
            
          </h1> <br />
          using{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-b from-foreground  to-primary text-transparent bg-clip-text">
              NotesApp
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.  Unde consectetur consequatur <br /> esse porro provident eum!
        </p>

        <div className="">
          { (!isAuth) ?
                      <RegisterLink>
          <Button className="">Get Started</Button>
        </ RegisterLink>
        :
        <Link href="/dashboard">
        <Button>Dashboard
          </Button></Link>
        }

          
        </div>

      </div>

     
      
    </section>
  );
};