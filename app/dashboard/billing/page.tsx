

import prisma from '@/lib/db';
import React from 'react'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { getStripeSession } from '@/lib/stripe';
import { redirect } from 'next/navigation';
import { SelectContent } from '@radix-ui/react-select';

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
)

async function getData(userId: string){
  const data = await prisma.subscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      status: true,
      user: {
        select: {
          stripeCustomerId : true
        }
      }
    }
  })
  return data;
}

const BillingPage = async () => {

  const {getUser} = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string);
  
const features = ["Example Feature Number 1", "Example Feature Number 2", "Example Feature Number 3"];
  
  async function createSubscription(){
    "use server";
    const dbUser = await prisma.user.findUnique({
      where: {
        id: user?.id,
      },
      select: {
        stripeCustomerId : true
      }
    })
    if(!dbUser?.stripeCustomerId){
      throw new Error("Unable to get customer id")
    }
    const subscriptionUrl = await getStripeSession({
      customerId : dbUser.stripeCustomerId,
      domainUrl : 'http://localhost:3000',
      priceId : process.env.STRIPE_PRICE_ID as string,
    });
    return redirect(subscriptionUrl);
  }   

  return (
    <div className='flex items-center justify-center'>
      <Card
    className="w-72 flex flex-col justify-between py-1 border-zinc-700 mx-auto sm:mx-0 animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors">
    <div>
      <CardHeader className="pb-8 pt-4">
          <div className="flex justify-between">
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">Pro</CardTitle>
          <div
            className="px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black"
          >
            Save $50
          </div>
          </div>
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">Choose the plan that's right for you</CardTitle>
        <div className="flex gap-0.5">
          <h3 className="text-3xl font-bold">30</h3>
          <span className="flex flex-col justify-end text-sm mb-1">₹</span>
        </div>
        <CardDescription className="pt-1.5 h-12">Perfect for owners of small & medium businessess

</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className="mt-2">
      <form action={createSubscription}>

      <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
        Buy Now
      </Button>
      </form>
    </CardFooter>
  </Card>
    </div>
  )
}

export default BillingPage
