import { useContext, useState } from "react";
import { Calendar } from "nexious-library/@nxs-organism";
import { AppContext } from "../context/AppContext";
// import data from "../data/example.data.json";

const AppCalendar = () => {
  const [date, setDate] = useState(new Date());
  const { events } = useContext(AppContext);
  const handleDayClick = (e) => {
    // console.log("day clicked ", e);
  };
  return (
    <div>
      <Calendar value={date} onDayClick={handleDayClick} events={events} />
    </div>
  );
};
export default AppCalendar;
