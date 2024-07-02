
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CircleCheck,CirclePlus } from 'lucide-react';


export default function Component() {
  return (
    <Card className="w-full max-w-md mx-auto mt-20 text-center border-none flex flex-col items-center p-4">
        <CirclePlus className="rotate-[45deg] size-11 text-red-600" />
      <CardHeader>
        <CardTitle>Payment Failed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-500">
            Unfortunately, your payment could not be processed. Please check your payment details and try again.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="mx-auto">
          <Link href="/dashboard" className="text-white" prefetch={false}>
            Return to Dashboard
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
