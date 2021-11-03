// 'use strict';

// const parcelEvents = require('../events');
// const faker = require('faker');
// const logDelivery = 

// require('../driver');

// const parcelObj = { store: 'store name', orderID: 1234, customer: 'George Washington', address: '100 Whitehouse Road'};

// // const parcelObj = process.argv[2];

// const time = new Date();


// parcelEvents.on('delivered', (payload) => {
//   console.log(`VENDOR: Thank you for delivering ${payload.parcel.orderID}`);
//   console.log('EVENT: delivered', payload);
// });

// parcelEvents.emit('pickup', {
//   time: time,
//   parcel: parcelObj, 
// });

'use strict';

const client = require('socket.io-client');
const faker = require('faker');
const PORT = process.env.PORT;

const vendorClient = client(`http://localhost:${PORT}/caps`);

const pickup = (store) => {
  const payload = {
    store,
    orderId: faker.random.alphaNumeric(15),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  vendorClient.emit('pickup', payload);
};

pickup(faker.company.companyName());

vendorClient.on('delivered', (payload) => console.log('Thanks you for delivering', payload.orderId));