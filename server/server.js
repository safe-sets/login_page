const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const Users = require('../db/models/Users.js');

app
  .use('/', express.static('public'))
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: true }))
  .use(morgan('tiny'))
  .use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

// If user is already registered, fetch their info from db for validation
app.get('/userLogin', (req, res) => {
  const { userName } = req.body;

  Users.findOne({ username: `${userName}` }, (err, response) => {
    if (err) {
      res.status(503).send();
    } else {
      //TODO: Verify that the model gets returned back
    }
  });
});

//If user is not registered, post their info into DB for validation
app.post('/registration', (req, res) => {
  const { username, password } = req.body;
  if (!username && !password) {
    res.send('Requires both form fields to be filled out');
  }

  //TODO
  if (!username) {
    let missingVal = !userName ? 'password' : 'username';
    res.status(418).send(`Error, requires a ${missingVal}`);
  }

  if (!password) {
    res.status(418).send('Error, requires a valid password');
  }

  if (username && password) {
    const User = new Users(user); //TODO: double check on this
    User.setPassword(password);
  }
});

module.exports = {
  app,
};
