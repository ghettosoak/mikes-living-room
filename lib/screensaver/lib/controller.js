'use strict';
const applescript = require('applescript');

var scriptRun = 'tell application "ScreenSaverEngine" to run';
var scriptQuit = 'tell application "ScreenSaverEngine" to quit';
 
module.exports = class ScreenSaverController {
  constructor() {}

  static build() {
    return new ScreenSaverController();
  }

  onButtonPressed(action, deviceId) {
    switch (action) {        
      case 'FUNCTION BLUE':
        applescript.execString(scriptRun);
        break;

      case 'FUNCTION RED':
        applescript.execString(scriptQuit);
        break;
    }
  }
};

