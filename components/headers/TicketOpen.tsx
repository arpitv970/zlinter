import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Ticket } from 'lucide-react'
import { Button } from '../ui/button'

const TicketOpen = () => {
  return (
    <div className='header-item ticket-open'><Card>
      <CardHeader>
        <CardTitle className='flex gap-2'><Ticket className='text-blue-500' />Card Title</CardTitle>
        <CardDescription>Tickets Open</CardDescription>
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

export default TicketOpen
