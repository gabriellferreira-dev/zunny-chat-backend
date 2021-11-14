const connection = require('./connection');

const createUser = async (data) => {
  const db = await connection();

  const user = await db.collection('users').insertOne(data);

  return user;
};

const getUserByEmail = async (email) => {
  const db = await connection();

  const user = await db.collection('users').findOne({ email });

  return user;
};

const updateUser = async (id, data) => {
  const db = await connection();

  await db.collection('users').findOneAndUpdate({ id }, data);
};

module.exports = { createUser, getUserByEmail, updateUser };
