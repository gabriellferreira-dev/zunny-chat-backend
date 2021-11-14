const User = require('../services/User');

const validateUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.getUserByEmail(email);

  if (!user) {
    return res.status(404).json({ error: 'Usuário não cadastrado.' });
  }

  if (user.password !== password) {
    return res.status(401).json({ error: 'Senha inválida.' });
  }

  req.user = user;

  next();
};

module.exports = validateUser;
