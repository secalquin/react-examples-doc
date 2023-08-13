import React from "react";
import Copyright from "../Copyright";
import Navbar from "../AppBar";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Copyright />
    </>
  );
};

export default Layout;
