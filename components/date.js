import { parseISO, format } from 'date-fns'
import { uk } from 'date-fns/locale'

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return (
        <time dateTime={dateString}>
            {format(date, 'd MMMM yyyy', { locale: uk })}
        </time>
    )
}