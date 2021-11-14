const User = require('../models/User');

const createUser = async (data) => {
  const user = await User.createUser(data);
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.getUserByEmail(email);
  return user;
};

module.exports = {
  createUser,
  getUserByEmail,
};
