import React from 'react';
import './Registered.css';

const Registered = props => {
  return (
    <div className="registered-message">
      <h3>Thank you for register !</h3>
      <button className="back-button" type="button" onClick={props.handleClick}>
        Back
      </button>
    </div>
  );
};

export default Registered;
