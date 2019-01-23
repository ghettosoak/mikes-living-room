"use strict";

const neeoapi = require("neeo-sdk");
const VLCdriver = require("./lib/vlc").devices[0];
const screenSaverDriver = require("./lib/screensaver").devices[0];
const chromeYoutubeDriver = require("./lib/chromeYoutube").devices[0];

// IP of your NEEO Brain
const BRAIN_IP = '192.168.0.101';

neeoapi
  .startServer({
    brain: BRAIN_IP,
    port: 6336,
    name: 'debug-server',
    devices: [
      VLCdriver,
      screenSaverDriver,
      chromeYoutubeDriver
    ]
  })
  .then(() => console.log('Server Ready'))
  .catch((error) => {
    console.error('ERROR:', error);
    process.exit(1);
});
