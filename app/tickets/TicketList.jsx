import Link from "next/link"

const getTickets = async () => {
    // imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const res = await fetch("http://localhost:4000/tickets", {next: {revalidate: 0}})
    
    return res.json()
}

export default async function TicketList() {
    const tickets = await getTickets()
    console.log(tickets)
    return (
        <>
            {tickets.map(ticket => (
                <div className='card my-5' key={ticket.id}>
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0,200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {tickets.length === 0 && (
                <p className='text-center'>There are no open tickets.</p>
            )}
        </>
    )
}   
