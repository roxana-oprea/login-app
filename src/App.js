import React from 'react';
import Title from './Title';
import Form from './Form';
import CompanyName from './CompanyDescription';

function App() {
  return (
    <div className="container">
      <div className="company-description">
        <CompanyName />
      </div>
      <div className="login">
        <Title />
        <Form />
      </div>
    </div>
  );
}

export default App;
