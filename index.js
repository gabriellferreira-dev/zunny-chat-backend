const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3001;

const getMessages = require('./controllers/getMessages');
const User = require('./controllers/User');
const checkExistUserOnRegister = require('./middlewares/checkExistUserOnRegister');
const validateUser = require('./middlewares/validateUser');

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

app.use(bodyParser.json());

app.get('/', getMessages);
app.post('/register', checkExistUserOnRegister, User.createUser);
app.post('/login', validateUser, User.userLogin);

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
