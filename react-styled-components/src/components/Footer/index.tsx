import React from "react";
import "./styles.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <p className="footer-text">
        Copyright © Sebastián Calquín {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
