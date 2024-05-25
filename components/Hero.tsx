// import { Button } from "./ui/button";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Illu from "./../public/illu.svg"
import {RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";


export const Hero = () => {
  return (
    <section className="container  flex  items-center justify-center py-20 px-10 md:py-32 lg:py-35 gap-4">
      <div className="text-center lg:text-center space-y-6 flex flex-col items-center w-full">
        <main className="text-5xl md:text-6xl font-bold ">
          <h1 className="inline">
            Maintain {" "} your{" "} 
            <span className="inline bg-gradient-to-r from-[#f59696]  to-[#d24747] text-transparent bg-clip-text">
             tasks
            </span>
            
          </h1> <br />
          using{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#ffdea2] via-[#f17e1f] to-[#d77b03] text-transparent bg-clip-text">
              Notesapp
            </span>{" "}
            {/* developers */}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.  Unde consectetur consequatur <br /> esse porro provident eum!
        </p>

        <div className="">
        <RegisterLink>
          <Button className="">Get Started</Button>
        </ RegisterLink>

          
        </div>

      </div>

     
      
    </section>
  );
};