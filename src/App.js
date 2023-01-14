import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import Fibonacci from "./pages/Fibonacci";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fibonacci" element={<Fibonacci />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
