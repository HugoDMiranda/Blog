import React from "react";
import { Link } from "react-router-dom";
import "../sass/components-styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">Blog</Link>
    </footer>
  );
}

export default Footer;
