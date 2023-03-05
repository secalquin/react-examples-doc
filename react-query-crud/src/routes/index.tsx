import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
