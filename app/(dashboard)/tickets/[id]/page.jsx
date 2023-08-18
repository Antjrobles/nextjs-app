import { notFound } from "next/navigation"; //  For the default 404

export const dynamicParams = true; // This makes the page static return a 404 if the id is not found

export async function generateMetadata({ params }) {
  const id = params.id

  const res = await fetch(`http://localhost:4000/tickets/${id}`)
  const ticket = await res.json()
 
  return {
    title: `Helpdesk | ${ticket.title}`
  }
}


export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets');

  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id
  }))
}

import Link from 'next/link';

async function GetTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  })

  if(!res.ok) {
    notFound()
  }
  return res.json()
}


export default async function TicketDetails({ params }) {

  const ticket = await GetTicket(params.id)
  return (
    <main>
      <nav>
        <h2>Ticket Detail</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
      </div>
      <Link href="/tickets">
        <h2 className="text-gray-600 hover:text-gray-950">Back to Tickets</h2>
        </Link> 


    </main>
  )
}
