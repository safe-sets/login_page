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

  handleValidation = pw => {
    const { username, password } = this.state;

    if (password.length === 0 || username.length === 0) {
      alert('Please enter a valid password');
      return;
    }

    let matchedCase = new Array();
    matchedCase.push('[$@$!%*#?&]'); // Special Charectors
    matchedCase.push('[A-Z]'); // Uppercase Alpabates
    matchedCase.push('[0-9]'); // Numbers
    matchedCase.push('[a-z]'); // Lowercase Alphabets

    let validChars = 0;
    for (let i = 0; i < matchedCase.length; i++) {
      if (new RegExp(matchedCase[i]).test(password)) {
        validChars++;
      }
    }

    let color = '';
    let strength = '';
    let error = 'Invalid password length';

    switch (validChars) {
      case 0:
      case 1:
      case 2:
        this.setState({
          strength: 'Very weak',
          color: 'red'
        });
        break;
      case 3:
        this.setState({
          strength: 'Medium',
          color: 'Orange'
        });
        break;
      case 4:
        this.setState({
          strength: 'Strong',
          color: 'Green'
        });
        break;
    }
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
        <button onClick={this.handleValidation}>Submit</button>
        <a href='#'>Sign up</a>
      </form>
    );
  }
}

export default LoginForm;
