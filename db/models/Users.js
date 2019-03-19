const mongoose = require('mongoose');
const { generateSalt, generateHash } = require('../utilities/dbUtilities.js');

mongoose.connect('mongodb://localhost/Users', { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => console.log('Connected to database'));
db.on('error', () => console.error.bind(console, 'error on connection'));

const userSchema = new mongoose.Schema({
  fullName: String,
  userName: String,
  email: String,
  password: String,
  hash: String,
  salt: String,
});

const Users = mongoose.model('Users', userSchema);

module.exports = {
  Users,
};
