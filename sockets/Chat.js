const users = {};

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('login', (user) => {
      users[socket.id] = user;
      io.emit('onlineUsers', Object.values(users));
    });

    socket.on('disconnect', () => {
      delete users[socket.id];
    });
  });
};
