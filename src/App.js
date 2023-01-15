import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import Fibonacci from "./pages/Fibonacci";
import Strings from "./pages/Strings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fibonacci" element={<Fibonacci />} />
        <Route path="/Strings" element={<Strings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
