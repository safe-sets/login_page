const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 9001;

const tempPassword = 'password';
const hash = crypto
              .createHmac('sha256', tempPassword)
              .update('I love cupcakes')
              .digest('hex');

              
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));