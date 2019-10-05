import React, { useState } from 'react';
import './Form.css';

const Form = props => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form className="form-register" onSubmit={props.handleSubmit}>
      <div className="form-row">
        <label htmlFor="full-name">Name</label>
        <input
          id="full-name"
          type="text"
          name="fullName"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="company-name">Company Name</label>
        <input
          id="company-name"
          type="text"
          name="companyName"
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
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
