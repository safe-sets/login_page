const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const PORT = 9001;
const {
  generateSalt,
  generateHash,
  saltHash
} = require('../db/utilities/dbUtilities.js');

app
  .use('/', express.static('public'))
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: true }))
  .use(morgan('tiny'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/login', (req, res) => {
  const { password } = req.body;
  const saltLength = generateSalt(16);
  const hashedPassword = generateHash(password, saltLength);
  const saltedHash = saltHash(hashedPassword.passwordHash);

  //send saltedHash to the database
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
