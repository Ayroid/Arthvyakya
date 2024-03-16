import "./App.css";

import { Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound/PageNotFound";

import DashBoard from "./pages/DashBoard/DashBoard";
import Ddos from "./pages/AttackPages/Ddos/Ddos";

function App() {
  const attacks = [
    "SQL Injections",
    "DDOS",
    "AI Phishing",
    "Malware Deployment",
    "Cross Site Scripting",
  ];

  return (
    <div className="mainDiv">
      <Routes>
        <Route path="/" element={<DashBoard attacks={attacks} />} />
        <Route path="/DDOS" element={<Ddos attacks={attacks} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
