import React from 'react'
import { DataTable } from './table/data-table'
import { columns } from './table/columns'
import { payments } from '@/lib/utils'

const ConsumerOverview = () => {
  return (
    <section className='consumer-overview'>
      <h1>Consumer Overview</h1>
      <DataTable columns={columns} data={payments} />
    </section>
  )
}

export default ConsumerOverview
