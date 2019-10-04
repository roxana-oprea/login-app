import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form className="form-login">
      <div className="form-row">
        <label htmlFor="full-name">Name</label>
        <input id="full-name" type="text" required />
      </div>

      <div className="form-row">
        <label htmlFor="company-name">Company Name</label>
        <input id="company-name" type="text" required />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" required />
      </div>

      <div className="form-row">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required />
      </div>

      <div className="form-row">
        <button className="start-button">GET STARTED</button>
      </div>

      <span className="terms">
        By signing up, you accept our <a href="#">Terms of use</a> and
        <a href="#"> Privacy Policy</a>
      </span>
    </form>
  );
};

export default Form;
