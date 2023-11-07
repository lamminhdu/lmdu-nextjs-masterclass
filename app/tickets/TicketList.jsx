const getTicket = async () => {
    const res = await fetch("http://localhost:4000/tickets", {next: {revalidate: 0}})
    
    return res.json()
}

export default async function TicketList() {
    const tickets = await getTicket()
    console.log(tickets)
    return (
        <>
            {tickets.map(ticket => (
                <div className='card my-5' key={ticket.id}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0,200)}...</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                </div>
            ))}
            {tickets.length === 0 && (
                <p className='text-center'>There are no open tickets.</p>
            )}
        </>
    )
}   
