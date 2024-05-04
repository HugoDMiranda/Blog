import React, { useState } from "react";
import "../sass/Login.css";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Login() {
  const [login, setLogin] = useState(true);

  const submit = () => {
    console.log("submit");
  };

  const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    // chair: yup.string().required(),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
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
              />
              <ErrorMessage
                name="name"
                component="span"
                className="errorMessage"
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
              <h3 className="login-account-text">User name</h3>
              <Field
                className="login-account-input"
                autoComplete="off"
                type="username"
                placeholder="Name"
                id="username"
                name="username"
              />
              <ErrorMessage
                name="username"
                component="span"
                className="errorMessage"
              />
              <h3 className="login-account-text">Email</h3>
              <Field
                className="login-account-input"
                autoComplete="off"
                type="email"
                placeholder="Yourname@gmail.com"
                id="email"
                name="email"
              />
              <ErrorMessage
                name="email"
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
                name="password"
                component="span"
                className="errorMessage"
              />
              <h4 className="login-account-text">Confirms Password</h4>
              <Field
                className="login-account-input"
                autoComplete="off"
                type="password"
                placeholder="Confirms password"
                id="passwordC"
                name="passwordC"
              />
              <ErrorMessage
                name="passwordC"
                component="span"
                className="errorMessage"
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
