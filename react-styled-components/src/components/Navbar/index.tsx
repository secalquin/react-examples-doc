import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { optionsList } from "./data";

const Navbar = () => {
  let navigate = useNavigate();
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
              <a onClick={() => navigate(item.path)} className="navbar-link">
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
