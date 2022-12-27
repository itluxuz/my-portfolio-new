import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./page/Home";
import Projekt from "./page/Projekt";
import About from "./page/About";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projekt" element={<Projekt />} />
        
      </Routes>
    </div>
  );
}

export default App;
