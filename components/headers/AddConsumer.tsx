'use client'
import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import { BarChartBig, UserCog, UserPlus } from 'lucide-react'
import { useGlobalContext } from '@/contexts'

const AddConsumer = () => {
  const { consumerSec, setConsumerSec } = useGlobalContext();
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
          <Button onClick={() => { setConsumerSec(consumerSec === 'Overview' ? 'Analysis' : 'Overview') }} className='gap-2' variant={'outline'}>
            {
              consumerSec === 'Overview'
                ? (<BarChartBig />)
                : (<UserCog />)
            }
            {
              consumerSec === 'Overview'
                ? ('Analyse Consumer')
                : ('Manage Consumer')
            }
          </Button>
        </CardFooter>
      </Card>

    </div>
  )
}

export default AddConsumer
