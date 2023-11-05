import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import StockRates from './StockRates'
import { stockAssests } from '@/lib/utils'

const YourStockCard = () => {
  return (
    <Card className='your-stocks'>
      <CardHeader>
        <CardTitle>Your Stocks</CardTitle>
      </CardHeader>
      <CardContent>
        {
          stockAssests.map((item, key) => (
            <StockRates key={key} {...item} />)
          )
        }
      </CardContent>
    </Card>
  )
}

export default YourStockCard
