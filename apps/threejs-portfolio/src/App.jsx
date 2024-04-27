import AllSections from "./sections/AllSections";
import TechWritePage from "./TechWritePage/TechWritePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllSections />} />
        <Route path="/technical_notes" element={<TechWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
