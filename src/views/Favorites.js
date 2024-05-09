import React, { useState } from "react";

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
        <p>Name</p>
        <p>Email</p>
        <p>number</p>
        <p>Password</p>
      </div>
      <button onClick={() => setChangePassword(!changePassword)}>
        {changePassword
          ? `It's Okey my old password`
          : `Want to change your password?`}
      </button>
      {changePassword ? (
        <div className="account-newpassword">
          <p>Your password</p>
          <input />
          <p>Confims password</p>
          <input />
          <p>New password</p>
          <input />
          <button>Change password</button>
        </div>
      ) : null}
    </div>
  );
}

export default Favorites;
