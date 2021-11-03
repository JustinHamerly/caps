'use strict';

const client = require('socket.io-client');
const PORT = process.env.PORT;

const driverClient = client(`http://localhost:${PORT}/caps`);

driverClient.on('join', (payload) => {
  console.log('Picked up', payload.orderId);
  driverClient.emit('in-transit', payload);
});

driverClient.on('delivered', (payload) => {
  console.log('Delivered', payload.orderId);
});
