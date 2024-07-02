import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import {Input} from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import prisma from '@/lib/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import SubmitButtons from '@/components/SubmitButtons'
import { revalidatePath } from 'next/cache'

async function getData(userId: string){
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      name: true,
      email: true,
      colorScheme: true,
    }
  })
  return data;
}



export default async function SettingsPage () {

  const {getUser} = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string);

  
  async function postData(formData: FormData) {
    "use server";
    const name = formData.get('name') as string;
    const colorScheme = formData.get('color') as string;
    await prisma.user.update({
      where:{
        id: user?.id,
      },
      data:{
        name: name ?? undefined,
        colorScheme: colorScheme ?? undefined,
      }, 
    })
    
    revalidatePath("/", "layout");
  }

    
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <h1 className='text-[40px] font-[600]'>Settings</h1>
      </div>
      <Card className='border-none'>
        <form action={postData}>
        <CardHeader>
            <CardTitle>General Information</CardTitle>
            <CardDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, laudantium!</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-3 '>
            <Label>Your Name</Label>
            <Input placeholder='John Doe' name='name' defaultValue={data?.name ?? undefined}></Input> 
        </CardContent>
        <CardContent className='flex flex-col gap-3'>
            <Label>Your Email</Label>
            <Input placeholder='johndoe@gmail.com' name='email' defaultValue={data?.email as string} disabled></Input>
        </CardContent>
        <CardContent className='flex flex-col gap-3'>
            <Label>Select Color</Label>
            <Select name="color" defaultValue={data?.colorScheme}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a color"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel className='opacity-50'>Colour</SelectLabel>
                        <SelectItem value='theme-green'>Green</SelectItem>
                        <SelectItem value='theme-orange'>Orange</SelectItem>
                        <SelectItem value='theme-rose'>Rose</SelectItem>
                        <SelectItem value='theme-blue'>Blue</SelectItem>
                        <SelectItem value='theme-violet'>Violet</SelectItem>
                        <SelectItem value='theme-yellow'>Yellow</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </CardContent>
            <CardFooter>
              <SubmitButtons></SubmitButtons>
            </CardFooter>

        </form>
      </Card>
    </div>
  )
}

