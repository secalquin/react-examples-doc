import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Trainee from "./pages/Trainee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainee" element={<Trainee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
