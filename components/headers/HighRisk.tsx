import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'
import { Button } from '../ui/button'

const HighRisk = () => {
  return (
    <div className='header-item high-risk'>
      <Card>
        <CardHeader>
          <CardTitle className='flex gap-2'><AlertCircle className='text-red-500' />182</CardTitle>
          <CardDescription>High Risk Consumers</CardDescription>
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

export default HighRisk
