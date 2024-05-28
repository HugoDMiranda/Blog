import { useState } from "react";
import { FaBars, FaUserAlt, FaCommentAlt, FaStar } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import "../sass/components-styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <IoHomeSharp />,
    },
    {
      path: "/Login",
      name: "Login",
      icon: <FaUserAlt />,
    },
    {
      path: "/Favorites",
      name: "Favorites",
      icon: <FaStar />,
    },
    {
      path: "/User",
      name: "User",
      icon: <FaCommentAlt />,
    },
  ];

  return (
    <div className="container">
      <div
        style={{
          width: isOpen ? "200px" : "50px",
          background: isOpen ? "rgb(226, 226, 226)" : "transparent",
        }}
        className="sidebar"
      >
        <div className="top_section">
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <Link
          to="/User"
          className="nav-user"
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <img src="img/tes3.png" alt="user-img" className="nav-user-img" />
          <span>User name</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
