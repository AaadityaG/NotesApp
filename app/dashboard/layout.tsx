import { ReactNode } from "react";
// import Dashboard from "./page";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import Dashboard from "./page";

async function getData({email, id, firstName, lastName, profileImage}: {email:string, id: string , firstName:string | undefined | null, lastName: string| undefined | null, profileImage: string | undefined | null} ){
    // storing the users from kinde to prisma 
    const user = await prisma.user.findUnique({
        where:{
            id: id,
        },
        select:{
            id: true,
            stripeCustomerId: true,
        },
    });

    // filling users details in prisma
    if(!user){
        const name = `${firstName ?? "" } ${lastName ?? ""}`
        await prisma.user.create({
            data:{
                id: id,
                email: email,
                name: name
            }
        })
    }
} 

export default async function DashboardLayout({children} : {children : ReactNode}){
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user){
        redirect("/");
    }

    await getData({email: user.email as string, firstName: user.given_name as string, id: user.id as string, lastName: user.family_name as string, profileImage: user.picture as string})

    return(
        <div>
        {children}
        <Dashboard/>
        </div>
    )
}