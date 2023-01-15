import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import Fibonacci from "./pages/Fibonacci";
import Strings from "./pages/Strings";
import PrimeNumbers from "./pages/PrimeNumbers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fibonacci" element={<Fibonacci />} />
        <Route path="/Strings" element={<Strings />} />
        <Route path="/PrimeNumbers" element={<PrimeNumbers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
