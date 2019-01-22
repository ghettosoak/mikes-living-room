"use strict";

const neeoapi = require("neeo-sdk");
const driver = require("./lib/vlc").devices[0];

// console.log(driver)

// IP of your NEEO Brain
const BRAIN_IP = '192.168.0.101';

neeoapi
  .startServer({
    brain: BRAIN_IP,
    port: 6336,
    name: 'debug-server',
    devices: [
      driver,
    ]
  })
  .then(() => console.log('Server Ready'))
  .catch((error) => {
    console.error('ERROR:', error);
    process.exit(1);
});
