import React from "react";
import { useState } from "react";

export default function Form() {
  const [values, setValues] = useState({
    userName: "",
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const handleUserNameChange = (e) => {
    e.persist();
    setValues((value) => ({
      ...values,
      userName: e.target.value,
    }));
  };

  const handleNameChange = (e) => {
    e.persist();
    setValues((value) => ({
      ...values,
      name: e.target.value,
    }));
  };

  const handlePhoneChange = (e) => {
    e.persist();
    setValues((value) => ({
      ...values,
      phone: e.target.value,
    }));
  };

  const handlePasswordChange = (e) => {
    e.persist();
    setValues((value) => ({
      ...values,
      password: e.target.value,
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    e.persist();
    setValues((value) => ({
      ...values,
      confirmPassword: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UserName - ", values.userName);
    console.log("Name - ", values.name);
    console.log("Phone - ", values.phone);
    console.log("Password - ", values.password);
    console.log("ConfirmPassword - ", values.confirmPassword);
    setSubmitted(true);
    if (values.password.localeCompare(values.confirmPassword) !== 0) {
      alert("Passwords don't Match");
    }
  };
  return (
    <div>
      <form class="login-form" onSubmit={handleSubmit}>
        <input
          id="user-name"
          class="form-field"
          type="text"
          placeholder="User Name"
          name="userName"
          value={values.userName}
          onChange={handleUserNameChange}
        />
        {submitted && values.userName.length < 1 && (
          <span id="user-name-error">Please enter user-name</span>
        )}

        <br />
        <input
          id="name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleNameChange}
        />
        {submitted && !values.name && (
          <span id="name-error">Please enter name</span>
        )}

        <br />
        <input
          id="phone"
          class="form-field"
          type="text"
          placeholder="Phone"
          name="phone"
          value={values.phone}
          onChange={handlePhoneChange}
        />
        {submitted && !values.phone && (
          <span id="phone-error">Please enter phone</span>
        )}

        <br />
        <input
          id="password"
          class="form-field"
          type="text"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handlePasswordChange}
        />
        {submitted && !values.password && (
          <span id="password-error">Please enter password</span>
        )}

        <br />
        <input
          id="confirm Password"
          class="form-field"
          type="text"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {submitted && !values.confirmPassword && (
          <span id="confirm-password-error">Please confirm your passsord</span>
        )}

        <br />
        <input
          id="submit"
          class="form-field"
          type="submit"
          placeholder="submit"
          name="submit"
        />
        <br />
      </form>
    </div>
  );
}
