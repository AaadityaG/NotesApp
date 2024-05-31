"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'
import { Button } from './ui/button'

const SubmitButtons = () => {
    const {pending} = useFormStatus();
  return (
    <>
      {
        pending ? (
            <Button className='opacity-60' disabled>
                <Loader2 className='animate-spin w-4 h-4 mr-2' /> Please wait
            </Button>
        ) : (
            <Button type='submit'>
                Save Now
            </Button>
        )
      }
    </>
  )
}

export default SubmitButtons
