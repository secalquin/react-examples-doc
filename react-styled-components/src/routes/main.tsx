import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Layout from "../components/Layout";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default MainRoutes;
