import React, { useState, useEffect } from "react";
import "../sass/Login.css";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Login() {
  const [login, setLogin] = useState(true);

  useEffect(() => {}, [login]);

  const submit = () => {
    console.log("submit");
  };

  const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    username: yup.string().required(),
    useremail: yup.string().email().required(),
    userpassword: yup.string().required(),
    confirmspassword: yup.string().required(),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    username: "",
    useremail: "",
    userpassword: "",
    confirmspassword: "",
  };

  return (
    <div className="login">
      <div className="login-account">
        <h4 className="login-account-title">Welcome to Blogs</h4>
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={userSchema}
        >
          {login ? (
            <Form className="form">
              <h3 className="login-account-text">User name</h3>
              <Field
                className="login-account-input"
                autoComplete="off"
                type="name"
                placeholder="Name"
                id="name"
                name="name"
              />{" "}
              <ErrorMessage
                name="name"
                component="span"
                className="errorMessage"
                render={() => (
                  <span className="errorMessage">Name is required</span>
                )}
              />
              <h4 className="login-account-text">Password</h4>
              <Field
                className="login-account-input"
                autoComplete="off"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component="span"
                className="errorMessage"
                render={() => (
                  <span className="errorMessage">Password is required</span>
                )}
              />
              <p
                className="login-account-login"
                onClick={() => setLogin(false)}
              >
                Don`t have a account? Sing in
              </p>
              <button className="login-account-button" type="submit">
                Login
              </button>
            </Form>
          ) : (
            <Form className="form">
              <h3 className="login-account-text">Account name</h3>
              <Field
                className="login-account-input"
                autoComplete="off"
                type="username"
                placeholder="User name"
                id="username"
                name="username"
              />
              <ErrorMessage
                name="username"
                component="span"
                className="errorMessage"
                render={() => (
                  <span className="errorMessage">User name is required</span>
                )}
              />
              <h3 className="login-account-text">Email</h3>
              <Field
                className="login-account-input"
                autoComplete="off"
                type="email"
                placeholder="Yourname@gmail.com"
                id="useremail"
                name="useremail"
              />
              <ErrorMessage
                name="useremail"
                component="span"
                className="errorMessage"
              />
              <h4 className="login-account-text">Password</h4>
              <Field
                className="login-account-input"
                autoComplete="off"
                type="password"
                placeholder="Your password"
                id="userpassword"
                name="userpassword"
              />
              <ErrorMessage
                name="userpassword"
                component="span"
                className="errorMessage"
                render={() => (
                  <span className="errorMessage">Password is required</span>
                )}
              />
              <h4 className="login-account-text">Confirms Password</h4>
              <Field
                className="login-account-input"
                autoComplete="off"
                type="password"
                placeholder="Confirms password"
                id="confirmspassword"
                name="confirmspassword"
              />
              <ErrorMessage
                name="confirmspassword"
                component="span"
                className="errorMessage"
                render={() => (
                  <span className="errorMessage">
                    Confirm password is required
                  </span>
                )}
              />
              <p className="login-account-login" onClick={() => setLogin(true)}>
                You already have an account? Login
              </p>
              <button className="login-account-button" type="submit">
                Sing in
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="login-info">
        <h2>!WELCOME!</h2>
        <h4>Take a look</h4>
      </div>
    </div>
  );
}

export default Login;
