require('dotenv').config();
const { MongoClient } = require('mongodb');

const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const uri = `mongodb+srv://gabriel-ferreira:${DB_PASSWORD}@cluster0.qiig4.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const mongoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = async () => {
  try {
    await mongoClient.connect();
    console.log('Connected correctly to server');
    return mongoClient.db(DB_NAME);
  } catch (e) {
    console.error(e);
  }
};

module.exports = connection;
