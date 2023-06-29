import { useState } from "react";
import { Calendar } from "nexious-library/@nxs-organism";
import data from "../data/example.data.json";

const AppCalendar = () => {
  const [date, setDate] = useState(new Date());
  const handleDayClick = (e) => {
    console.log("day clicked ", e);
  };
  return (
    <div>
      <Calendar value={date} onDayClick={handleDayClick} events={data.events} />
    </div>
  );
};
export default AppCalendar;
