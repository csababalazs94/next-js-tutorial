import { parseISO, format } from 'date-fns';
interface DateProps {
  dateString: string;
}
export default function Date(DateProps) {
  const date = parseISO(DateProps.dateString);
  return (
    <time dateTime={DateProps.dateString}>{format(date, 'LLLL d, yyyy')}</time>
  );
}
