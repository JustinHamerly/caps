'use strict';

const parcelEvents = require('./parcel');

require('./driver');

const parcelObj = { store: 'store name', orderID: 1234, customer: 'George Washington', address: '100 Whitehouse Road'};

// const parcelObj = process.argv[2];

const time = new Date();


parcelEvents.on('delivered', (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.parcel.orderID}`);
  console.log('EVENT: delivered', payload);
});

parcelEvents.emit('pickup', {
  time: time,
  parcel: parcelObj, 
});
