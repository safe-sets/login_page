const crypto = require('crypto');

const generateSalt = length => {
  return crypto
    .randomBytes(Math.ceil(length))
    .toString('hex')
    .slice(0, length);
};

const generateHash = (password, salt) => {
  let hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  let value = hash.digest('hex');
  return {
    salt: salt,
    passwordHash: value,
  };
};

const saltHash = userPassword => {
  let salt = generateSalt(16); //Gives us a salt of length 16
  let passwordData = generateHash(userPassword, salt);

  return passwordData;
};

module.exports = {
  generateSalt,
  generateHash,
  saltHash,
};
