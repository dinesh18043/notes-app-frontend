import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popup from "./Popup";
import Home from "./Home";
import Notecard from "./Notecard";
import Detail from "./Detail";
import Update from "./Update";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Signup />} /> */}
        <Route path="/popup" element={<Popup />} />
        <Route path="/" element={<Home />} />
        <Route path="/notecard" element={<Notecard />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
