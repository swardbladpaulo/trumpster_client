import React from "react";

const RegisterForm = ({ submitFormHandler }) => {
  return (  
    <div data-cy="register-form">
      <input
        name="email"
        type="email"
        id="email"
        data-cy="email"
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        id="password"
        data-cy="password"
        placeholder="Password"
      />
      <input
        name="password_confirmation"
        type="password_confirmation"
        id="password_confirmation"
        data-cy="password_confirmation"
        placeholder="password_confirmation"
      />
    </div>
  );
};

export default RegisterForm;