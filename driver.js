'use strict';

const parcelEvents = require('./parcel');

parcelEvents.on('pickup', (payload) => {
  
  console.log('EVENT: pickup', payload);
  console.log(`DRIVER: picked up ${payload.parcel.orderID}`);
  parcelEvents.emit('in-transit', payload);

});

parcelEvents.on('in-transit', (payload) => {

  console.log('EVENT: in-transit', payload);
  console.log(`DRIVER: delivered ${payload.parcel.orderID}`);
  parcelEvents.emit('delivered', payload);

});
