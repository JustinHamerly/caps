''use strict';

const socketio = require('socket.io');

const port = process.env.PORT;
const server = socketio(port);

const caps = server.of('/caps');
const vendor = server.of('/vendor');
const driver = server.of('/driver');

caps.on('connection', socket => {

  console.log('Socket is connected', socket.id);

  socket.on('pickup', payload => {
    console.log(payload);
  });

  socket.on('pickup', payload => {
    socket.join('vendor').join('driver');
    caps.emit('join', payload);
    console.log(payload);
  })

  socket.on('in-transit', payload => {
    socket.join('vendor').join('driver');
    console.log(payload);
    caps.to
  })

});

vendor.on('connection', socket => {



});

driver.on('connection', payload => {

});
'