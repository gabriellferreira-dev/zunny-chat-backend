const User = require('../models/User');
const { updateUserStatus } = require('../services/User');

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await User.createUser(userData);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

const userLogin = async (req, res) => {
  const { user } = req;
  const { password, ...rest } = user;
  return res.status(200).json({ user: rest });
};

module.exports = { createUser, userLogin };
