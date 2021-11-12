'use strict';

const client = require('socket.io-client');
const faker = require('faker');
const port = process.env.PORT;

function connect(namespace){
  return client(`http://localhost:${port}/${namespace}`);
}

const driverClient = connect('driver');

const vendorClient = connect('vendor');

const pickup = store => {
  const payload = {
    store,
    orderId: faker.random.alphaNumeric(15),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  vendorClient.emit('pickup', payload);
};

pickup(faker.company.companyName());
