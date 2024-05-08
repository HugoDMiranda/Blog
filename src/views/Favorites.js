import React from "react";

function Favorites() {
  return (
    <div>
      <div>
        <img src="img/tes3.png" alt="user-img" className="user-info-img" />
        <h4>Jane Doe</h4>
        <p>Last login</p>
      </div>
      <div>
        <p>Name</p>
        <p>Email</p>
        <p>number</p>
        <p>Password</p>
      </div>
      <button>Want to change your password?</button>
      <div>
        <p>Your password</p>
        <input />
        <p>Confims password</p>
        <input />
        <p>New password</p>
        <input />
        <button>Change password</button>
      </div>
    </div>
  );
}

export default Favorites;
