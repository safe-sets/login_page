const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const { Users } = require('../db/models/Users.js');
const {
  generateSalt,
  generateHash,
} = require('../db/utilities/dbUtilities.js');

app
  .use('/', express.static('public'))
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: true }))
  .use(morgan('tiny'))
  .use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

// If user is already registered, fetch their info from db for validation
// app.get('/userLogin', (req, res) => {
//   const { userName } = req.body;

//   Users.findOne({ username: `${userName}` }, (err, response) => {
//     if (err) {
//       res.status(503).send();
//     } else {
//       //TODO: Verify that the model gets returned back
//     }
//   });
// });

// If user is not registered, post their info into DB for validation
app.post('/register', (req, res) => {
  const { email, fullName, username, password } = req.body;
  let salt = generateSalt(password.length);
  let hash = generateHash(password, salt);

  if (!username && !password) {
    res.status(418).send('Requires a password/username to register');
  }

  let newUser = new Users({
    fullName,
    userName: username,
    email,
    password,
    hash,
    salt,
  });
});

module.exports = {
  app,
};
