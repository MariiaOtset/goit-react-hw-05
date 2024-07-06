import { format } from "date-fns";
import { enGB } from "date-fns/locale";

function FormattedDate({ isoDate }) {
  const formattedDate = format(new Date(isoDate), "dd MMMM yyyy, HH:mm", {
    locale: enGB,
  });
  return <span>{formattedDate}</span>;
}

export default FormattedDate;
