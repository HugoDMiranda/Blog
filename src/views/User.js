import React from "react";
import "../sass/User.css";

function User() {
  return (
    <div className="user">
      <div className="user-info">
        <img src="img/tes3.png" alt="user-img" className="user-info-img" />
        <h4>Jane Doe</h4>
      </div>
      <div className="user-button">
        <button>Favorites</button>
        <button>Yours</button>
      </div>
      <div className="user-posts">
        <h3>POSTS</h3>
      </div>
    </div>
  );
}

export default User;
