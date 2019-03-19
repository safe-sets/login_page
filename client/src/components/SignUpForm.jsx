import React from 'react';
import axios from 'axios';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      username: '',
      password: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, fullName, username, password } = this.state;

    axios
      .post('/register', {
        email,
        fullName,
        username,
        password,
      })
      .then(response => {
        console.log('Successfully posted to database');
      })
      .catch(error => {
        console.log('Failed to save to database');
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <p>Email</p>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <p>Full Name</p>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={this.handleChange}
        />
        <p>Username</p>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
        />
        <p>Password</p>
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default SignUpForm;
