import React, { useState } from "react";
import "../sass/Login.css";

function Login() {
  const [login, setLogin] = useState(true);

  return (
    <div className="login">
      <div className="login-account">
        <h4 className="login-account-title">Welcome to Blogs</h4>
        {login ? (
          <>
            <h3 className="login-account-text">User name or email</h3>
            <input className="login-account-input" />
            <h4 className="login-account-text">Password</h4>
            <input className="login-account-input" />
            <spam
              className="login-account-login"
              onClick={() => setLogin(false)}
            >
              Don`t have a account? Sing in
            </spam>
            <button className="login-account-button">Login</button>
          </>
        ) : (
          <>
            <h3 className="login-account-text">User name</h3>
            <input className="login-account-input" />
            <h3 className="login-account-text">Email</h3>
            <input className="login-account-input" />
            <h4 className="login-account-text">Password</h4>
            <input className="login-account-input" />
            <h4 className="login-account-text">Confirms Password</h4>
            <input className="login-account-input" />
            <spam
              className="login-account-login"
              onClick={() => setLogin(true)}
            >
              You already have an account? Login
            </spam>
            <button className="login-account-button">Sing in</button>
          </>
        )}
      </div>
      <div className="login-info">
        <h2>!WELCOME!</h2>
        <h4>Take a look</h4>
      </div>
    </div>
  );
}

export default Login;
