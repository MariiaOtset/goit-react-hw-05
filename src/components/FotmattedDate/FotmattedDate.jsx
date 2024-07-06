import { format } from "date-fns";
import { uk } from "date-fns/locale";

function FormattedDate({ isoDate }) {
  const formattedDate = format(new Date(isoDate), "dd MMMM yyyy, HH:mm", {
    locale: uk,
  });
  return <span>{formattedDate}</span>;
}

export default FormattedDate;
