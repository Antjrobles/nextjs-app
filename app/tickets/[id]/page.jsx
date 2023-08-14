import Link from 'next/link';

async function GetTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  })
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
