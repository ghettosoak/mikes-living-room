'use strict';
const applescript = require('applescript');
 
module.exports = class iTunesController {
  constructor() {}

  static build() {
    return new iTunesController();
  }

  onButtonPressed(action, deviceId) {

    switch (action) {      
      case 'FUNCTION BLUE':
        applescript.execString('tell application "iTunes" to activate')
        break;
      
      case 'NEXT':
      case 'CURSOR RIGHT':
        applescript.execString('tell application "iTunes" to next track');
        break;
      
      case 'PREVIOUS':
      case 'CURSOR LEFT':
        applescript.execString('tell application "iTunes" to back track');
        break;
      
      case 'PLAY':        
      case 'PAUSE':
      case 'STOP':
      case 'CURSOR ENTER':
        applescript.execString('tell application "iTunes" to playpause');
        break;
    }
  }
};

