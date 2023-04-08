import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./styles.css";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
