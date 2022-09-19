import Row from "./components/Row";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddHabit from "./components/AddHabit";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/addHabit" className="link">
          Add Habit
        </Link>
        <Link to="/" className="link">
          Habits
        </Link>
        <Header />
        <Routes>
          <Route path="/addHabit" element={<AddHabit />} />
          <Route path="/" element={<Row />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
