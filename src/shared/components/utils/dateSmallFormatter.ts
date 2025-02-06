export function formatSmallDate(date: Date) {
    const formattedDate = new Date(date).toLocaleDateString('es-ES', {
        month: 'short',
        day: '2-digit'
    })

    // Split the date parts and format them
    const [day, month] = formattedDate.split(' ')

    
    // Combine with desired format
    //return `${day}/${upperMonth}/${year}`

    // Combine with desired format without 
    return `${day} ${month}`
}