import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popup from "./Popup";
import Home from "./Home";
import Notecard from "./Notecard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/popup" element={<Popup />} />
        <Route path="/" element={<Home />} />
        <Route path="/notecard" element={<Notecard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
