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
        <p>
          <span className='tru-coin'>TruCoin</span>
          <span className='tru-coin-asset'>{assest}</span>
        </p>
        <p className={`${errorCorrection > 0 ? 'text-green-500' : 'text-red-500'} stock-rate`}>
          ${rate}<span>({errorCorrection > 0 && '+'}{errorCorrection}%)</span>
        </p>
      </div>
      <div className='font-bold text-xl'>{weight}{unit}</div>
    </div>
  )
}

export default StockRates
