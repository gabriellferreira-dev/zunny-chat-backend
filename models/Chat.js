const connection = require('./connection');

const createMessage = async (data) => {
  const db = await connection();

  await db.collection('messages').insertOne(data);
};

const getAllMessages = async () => {
  const db = await connection();

  const messages = await db.collection('messages').find();

  return messages;
};

module.exports = { createMessage, getAllMessages };
