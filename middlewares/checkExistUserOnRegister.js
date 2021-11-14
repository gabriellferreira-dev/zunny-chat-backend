const User = require('../models/User');

const checkExistUserOnRegister = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.getUserByEmail(email);

  if (user) {
    return res.status(409).json({ error: 'Esse e-mail já está cadastrado.' });
  }
  next();
};

module.exports = checkExistUserOnRegister;
