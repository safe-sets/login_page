import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      strength: '',
      color: ''
    };
  }

  handleInput = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <div id='username-container'>
          <label htmlFor='username' id='username'>
            <span>Username</span>
            <input
              onChange={this.handleInput}
              type='text'
              name='username'
              placeholder='Enter username...'
            />
          </label>
        </div>
        <div id='password-container'>
          <label htmlFor='password' id='password'>
            <span>Password</span>
            <input
              type='password'
              name='password'
              onChange={this.handleInput}
            />
          </label>
        </div>
        <div>
          <span>Weak</span>
          <span>Medium</span>
          <span>Strong</span>
        </div>
        <button onClick={this.handleValidation}>Submit</button>
        <a href='#'>Sign up</a>
      </form>
    );
  }
}

export default LoginForm;
