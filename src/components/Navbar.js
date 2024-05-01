import { useState } from "react";
import { FaBars, FaUserAlt, FaCommentAlt, FaStar } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
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
      name: "Yours",
      icon: <FaUserAlt />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/User",
      name: "Favorites",
      icon: <FaStar />,
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
        <div className="nav-user" style={{ display: isOpen ? "flex" : "none" }}>
          <img src="img/tes3.png" alt="user-img" className="nav-user-img" />
          <span>User name</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
