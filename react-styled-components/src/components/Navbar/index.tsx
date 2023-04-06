import React, { useState } from "react";

import "./styles.css";
import { optionsList } from "./data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {menuOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>
      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        {optionsList.map((item) => {
          return (
            <li className="navbar-item" key={item.id}>
              <a href="#" className="navbar-link">
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
