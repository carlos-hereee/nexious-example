import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AppCalendar from "./pages/Calendar";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/booking" element={<AppCalendar />} />
    </Routes>
  );
};
export default AppRouter;
