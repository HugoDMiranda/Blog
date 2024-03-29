import { useState } from "react";
import { CiCloudOn } from "react-icons/ci";
import { GoHome } from "react-icons/go";
// import { Link } from "react-router-dom";
import "../sass/components-styles/Navbar.css";

function Navbar() {
  const Test = [1, 2, 3];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <header>
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="icon">{isOpen ? "close" : "menu"}</span>
          </button>
          <GoHome />
        </header>
        <nav>
          {Test.map((item) => {
            return (
              <button key={item} type="button">
                <CiCloudOn className="icon">item</CiCloudOn>
                <p>item</p>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Navbar;
