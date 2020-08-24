import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // stop the default action & the page from reloading
    
    fetch('/api/newuser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    });
  };

  render() {
    return (
      <form>
        <label>Username:
          <input
            onChange={this.handleInputChange}
            type="text"
            name="username"
            value={this.state.username}
          />
        </label><br />

        <label>Password:
          <input
            onChange={this.handleInputChange}
            type="password"
            name="password"
            value={this.state.password}
          />
        </label>

        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  };
}

export default App;
