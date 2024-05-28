import React, { useState } from "react";
import "../sass/Favorites.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function User() {
  const [changePassword, setChangePassword] = useState(false);

  const submit = () => {
    console.log("submit");
  };

  const passwordSchema = yup.object().shape({
    password: yup.string().required(),
    confirmpassword: yup.string().required(),
    newpassword: yup.string().required(),
  });

  const initialValues = {
    password: "",
    confirmpassword: "",
    newpassword: "",
  };

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
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={passwordSchema}
        >
          <Form className="account-newpassword">
            <h3>Your password</h3>
            <Field
              className="account-newpassword-input"
              autoComplete="off"
              type="password"
              id="password"
              name="password"
            />
            <ErrorMessage
              name="password"
              component="span"
              render={() => (
                <span className="errorMessage">Password is required</span>
              )}
            />

            <h3>Confims password</h3>
            <Field
              className="account-newpassword-input"
              autoComplete="off"
              type="password"
              id="confirmpassword"
              name="confirmpassword"
            />
            <ErrorMessage
              name="confirmpassword"
              component="span"
              render={() => (
                <span className="errorMessage">
                  Confirm password is required
                </span>
              )}
            />
            <h3>New password</h3>
            <Field
              className="account-newpassword-input"
              autoComplete="off"
              type="password"
              id="newpassword"
              name="newpassword"
            />
            <ErrorMessage
              name="newpassword"
              component="span"
              render={() => (
                <span className="errorMessage">New password is required</span>
              )}
            />
            <button type="submit">Change password</button>
          </Form>
        </Formik>
      ) : null}
    </div>
  );
}

export default User;
