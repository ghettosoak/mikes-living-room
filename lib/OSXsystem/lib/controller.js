'use strict';
const applescript = require('applescript');

module.exports = class OSXSystemController {
  constructor() {}

  static build() {
    return new OSXSystemController();
  }

  onButtonPressed(action, deviceId) {
    switch (action) {        
      case 'FUNCTION BLUE':
        applescript.execString('tell application "ScreenSaverEngine" to run');
        break;

      case 'FUNCTION RED':
        applescript.execString('tell application "ScreenSaverEngine" to quit');
        break;

      case 'FUNCTION GREEN':
        applescript.execString('tell application "VLC" to quit');
        applescript.execString('tell application "System Events" to shut down');
        break;
    }
  }
};

