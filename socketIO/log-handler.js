'use strict';

module.exports = function log(event, payload){
  let log = {
    event,
    time: new Date().toString(),
    payload,
  };
  console.log('EVENT', log);
};
