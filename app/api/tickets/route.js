// endpoint = /api/tickets

import { NextResponse } from "next/server"  // import the NextResponse object to return a response from the API

export async function GET() {
  const res = await fetch('http://localhost:4000/tickets')

  const tickets = await res.json()

  return NextResponse.json(tickets, {
    status: 200
  })
}