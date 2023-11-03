import React from 'react'

interface PropsType {
  assest: string,
  rate: number,
  errorCorrection: number,
  weight: number
  unit: string
}

const StockRates = ({ assest, rate, errorCorrection, weight, unit }: PropsType) => {
  return (
    <div className='flex justify-between items-center my-2'>
      <div>
        <p>TruCoin <span className='text-yellow-500'>{assest}</span></p>
        <p className={`${errorCorrection > 0 ? 'text-green-500' : 'text-red-500'}`}>${rate}({errorCorrection > 0 && '+'}{errorCorrection}%)</p>
      </div>
      <div className='font-bold text-xl'>{weight}{unit}</div>
    </div>
  )
}

export default StockRates
