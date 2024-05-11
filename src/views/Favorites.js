import React, { useState } from "react";
import "../sass/Favorites.css";

function Favorites() {
  const [changePassword, setChangePassword] = useState(false);

  return (
    <div className="account">
      <div className="account-info">
        <img
          src="img/tes3.png"
          alt="account-img"
          className="account-info-img"
        />
        <h4>Jane Doe</h4>
        <p>Last login</p>
      </div>
      <div className="account-data">
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>number</h3>
        <h3>Password</h3>
      </div>
      <button onClick={() => setChangePassword(!changePassword)}>
        {changePassword
          ? `It's Okey my old password`
          : `Want to change your password?`}
      </button>
      {changePassword ? (
        <div className="account-newpassword">
          <h3>Your password</h3>
          <input />
          <h3>Confims password</h3>
          <input />
          <h3>New password</h3>
          <input />
          <button>Change password</button>
        </div>
      ) : null}
    </div>
  );
}

export default Favorites;
