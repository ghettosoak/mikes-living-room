'use strict';
const applescript = require('applescript');

var script = 'tell application "ScreenSaverEngine" to run';
 
module.exports = class ScreenSaverController {
  constructor() {}

  static build() {
    return new ScreenSaverController();
  }

  onButtonPressed(action, deviceId) {
    console.log(action)
    switch (action) {        
      case 'FUNCTION BLUE':
        applescript.execString(script);
        break;
    }
  }
};

