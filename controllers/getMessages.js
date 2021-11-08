const Chat = require('../models/Chat');

module.exports = async (req, res) => {
  const messages = await Chat.getAllMessages();

  return res.status(200).json(messages);
};
