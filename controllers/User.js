const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await User.createUser(userData);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

module.exports = { createUser };
