const mongoose = require('mongoose');
const { generateSalt, generateHash } = require('../utilities/dbUtilities.js');

const db = mongoose.connection;
mongoose.connect('mongodb://localhost/Users', { useNewUrlParser: true });

db.once('open', () => console.log('Connected to database'));
db.on('error', () => console.error.bind(console, 'error on connection'));

const userSchema = new mongoose.Schema({
  userName: String,
  hash: String,
  salt: String,
});

userSchema.methods.setPassword = password => {
  this.salt = generateSalt(password.length);
  this.hash = generateHash(password, this.salt);
};

userSchema.methods.validatePassword = password => {
  const hash = generateHash(password.length, this.salt);
  return this.hash === hash;
};

mongoose.model('Users', userSchema);

module.exports = {
  userSchema,
};
