import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Contact } from 'lucide-react'
import { Button } from '../ui/button'

const AprovalPending = () => {
  return (
    <div className='header-item approval-pending'><Card>
      <CardHeader>
        <CardTitle className='flex gap-2'>
          <Contact className='text-yellow-500' />276</CardTitle>
        <CardDescription>KYC Aproval pending</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>
          View List
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default AprovalPending
