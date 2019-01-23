'use strict';

const vlc = require('../lib/vlc');

module.exports = {
  devices: [
    ...vlc.devices,
  ],
};
