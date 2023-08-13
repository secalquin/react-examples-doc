import React from "react";
import Copyright from "../Copyright";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
      <Copyright />
    </>
  );
};

export default Layout;
