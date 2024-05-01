import React, { useState } from "react";
import "../sass/Login.css";

function Login() {
  const [login, setLogin] = useState(true);

  return (
    <div className="login">
      <div className="login-account">
        <h4>Welcome to Blogs</h4>
        {login ? (
          <>
            <h3>User name or email</h3>
            <input />
            <h4>Password</h4>
            <input />
            <spam onClick={() => setLogin(false)}>
              Don`t have a account? Sing in
            </spam>
            <button>Login</button>
          </>
        ) : (
          <>
            <h3>User name</h3>
            <input />
            <h3>Email</h3>
            <input />
            <h4>Password</h4>
            <input />
            <h4>Confirms Password</h4>
            <input />
            <spam onClick={() => setLogin(true)}>
              You already have an account? Login
            </spam>
            <button>Sing in</button>
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
