import React from 'react'
import AddConsumer from '../headers/AddConsumer'
import AprovalPending from '../headers/AprovalPending'
import HighRisk from '../headers/HighRisk'
import TicketOpen from '../headers/TicketOpen'

const Header = () => {
  return (
    <section className='header'>
      <AddConsumer />
      <AprovalPending />
      <HighRisk />
      <TicketOpen />
    </section>
  )
}

export default Header
