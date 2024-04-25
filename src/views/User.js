import React from "react";

function User() {
  return (
    <div>
      <div>
        <img src="img/tes3.png" alt="user-img" className="user-img" />
        <h4>Jane Doe</h4>
      </div>
      <div>
        <button>Favorites</button>
        <button>Yours</button>
      </div>
      <div>
        <h3>POSTS</h3>
      </div>
    </div>
  );
}

export default User;
