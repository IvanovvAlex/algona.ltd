import "./Main.css";
import Experience from "../Experience/Experience";
import Banner from "../Banner/Banner";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Banner />
      <Routes>
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default Main;
