import React from 'react'
import TicketForm from './TicketForm'

export default function CreateTicket() {
  return (
    <main>
        <h2 className='text-primary text-center'>Add a new ticket</h2>
        <TicketForm />
    </main>
  )
}
