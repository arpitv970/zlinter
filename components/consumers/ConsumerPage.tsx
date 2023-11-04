'use client'
import React from 'react'
import ConsumerOverview from './ConsumerOverview'
import ConsumerAnalysis from './ConsumerAnalysis'
import { useGlobalContext } from '@/contexts'

const ConsumerPage = () => {
  const { consumerSec } = useGlobalContext();
  return (
    <section className='consumer'>
      {
        consumerSec === 'Overview'
          ? <ConsumerOverview />
          : <ConsumerAnalysis />
      }
    </section>
  )
}

export default ConsumerPage
