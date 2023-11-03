import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import { UserCog, UserPlus } from 'lucide-react'

const AddConsumer = () => {
  return (
    <div className='add-consumer'>
      <Card>
        <CardHeader>
          <CardTitle>Hello Arpit!</CardTitle>
          <CardDescription>You have 134 consumers this week.</CardDescription>
        </CardHeader>
        <CardFooter className='gap-2'>
          <Button className='gap-2' variant={'default'}>
            <UserPlus />
            Add Consumer
          </Button>
          <Button className='gap-2' variant={'outline'}>
            <UserCog />
            Manage Consumer
          </Button>
        </CardFooter>
      </Card>

    </div>
  )
}

export default AddConsumer
