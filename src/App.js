import React from 'react';
import Title from './Title';
import Form from './Form';
import CompanyName from './CompanyDescription';
import Registered from './Registered';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isRegistered: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit() {
    this.setState({
      isRegistered: true,
    });
  }

  handleClick() {
    this.setState({
      isRegistered: false,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="company-description">
          <CompanyName />
        </div>
        {this.state.isRegistered ? (
          <Registered handleClick={this.handleClick} />
        ) : (
          <div className="register">
            <Title />
            <Form handleSubmit={this.handleSubmit} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
