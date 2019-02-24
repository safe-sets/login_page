const express = require('express');
const crypto = require('crypto');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const PORT = 9001;

app
  .use('/', express.static('public'))
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: true }))
  .use(morgan('tiny'));

app.get('/', (req, res) => res.send('Hello World!'));

const tempPassword = 'password';

const hash = crypto
  .createHmac('sha256', tempPassword)
  .update('I love cupcakes')
  .digest('hex');

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
