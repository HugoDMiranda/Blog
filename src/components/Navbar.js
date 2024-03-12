import React from "react";
import { Link } from "react-router-dom";
import "../sass/components-styles/Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Navbar</Link>
    </nav>
  );
}

export default Navbar;
