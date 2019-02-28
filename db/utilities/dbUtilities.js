const crypto = require('crypto');

const generateSalt = length => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
};

const generateHash = (password, salt) => {
  let hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  let value = hash.digest('hex');
  return {
    salt: salt,
    passwordHash: value
  };
};

const saltHash = userPassword => {
  let salt = generateSalt(16); //Gives us a salt of length 16
  let passwordData = generateHash(userPassword, salt);

  return passwordData;
};

let myPassword = 'ALBERT';
let salt = generateSalt(12);
let hashedPassword = generateHash(myPassword, salt);
// let saltedHashed = saltHash(hashedPassword);

console.log(salt, 'this is the salt');
console.log(hashedPassword, 'this is the haspedPassword');
// console.log(saltedHashed, 'Salted the hash pw');
