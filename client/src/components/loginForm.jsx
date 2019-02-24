import React from 'react';

const loginForm = () => {
  return (
    <form>
    <div id="username-container">
      <label htmlFor="email" id="email">
    Email address
        <input type="text" name="email" placeholder="Enter username..." />
      </label>
    </div>
    <div id="password-container">
      <label htmlFor="password" id="password">
    Password
        <input type="password" name="password" />
      </label>
    </div>
  </form>
  )
}

export default loginForm;
