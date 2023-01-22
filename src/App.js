import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import Fibonacci from "./pages/Fibonacci";
import Strings from "./pages/Strings";
import PrimeNumbers from "./pages/PrimeNumbers";
import MultiplicationTable from "./pages/MultiplicationTable";
import SumOfNatural from "./pages/SumOfNatural";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fibonacci" element={<Fibonacci />} />
        <Route path="/Strings" element={<Strings />} />
        <Route path="/PrimeNumbers" element={<PrimeNumbers />} />
        <Route path="/MultiplicationTable" element={<MultiplicationTable />} />
        <Route path="/SumOfNatural" element={<SumOfNatural />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
