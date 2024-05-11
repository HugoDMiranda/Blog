import React, { useState } from "react";
import "../sass/Favorites.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function Favorites() {
  const [changePassword, setChangePassword] = useState(false);

  const submit = () => {
    console.log("submit");
  };

  const passwordSchema = yup.object().shape({
    password: yup.string().required(),
    confirmspassword: yup.string().required(),
    newpassword: yup.string().required(),
  });

  const initialValues = {
    password: "",
    confirmspassword: "",
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
              className="errorMessage"
            />
            <h3>Confims password</h3>
            <Field
              className="account-newpassword-input"
              autoComplete="off"
              type="password"
              id="confirmspassword"
              name="confirmspassword"
            />
            <ErrorMessage
              name="confirmspassword"
              component="span"
              className="errorMessage"
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
              className="errorMessage"
            />
            <button type="submit">Change password</button>
          </Form>
        </Formik>
      ) : null}
    </div>
  );
}

export default Favorites;
