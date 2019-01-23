'use strict';

const vlc = require('../lib/vlc');
const screensaver = require('../lib/screensaver');
const chromeYoutube = require('../lib/chromeYoutube');

module.exports = {
  devices: [
    ...vlc.devices,
    ...vlc.screensaver,
    ...vlc.chromeYoutube,
  ],
};
