'use strict';

const vlc = require('../lib/vlc');
const OSXsystem = require('../lib/OSXsystem');
const OSXitunes = require('../lib/OSXitunes');
const youtubeViaChrome = require('../lib/youtubeViaChrome');

module.exports = {
  devices: [
    ...vlc.devices,
    ...OSXsystem.devices,
    ...OSXitunes.devices,
    ...youtubeViaChrome.devices,
  ],
};
