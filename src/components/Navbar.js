import { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../sass/components-styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
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
        <div style={{ display: isOpen ? "block" : "none" }}>
          <img src="img/tes3.png" alt="user-img" className="nav-user-img" />
          <h4>User name</h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
