'use strict';
const applescript = require('applescript');
 
module.exports = class youtubeController {
  constructor() {}

  static build() {
    return new youtubeController();
  }

  onButtonPressed(action, deviceId) {
    switch (action) {      
      case 'FUNCTION YELLOW':
        applescript.execString('tell application "Google Chrome" to activate')
        break;  

      case 'FUNCTION BLACK':
        applescript.execString('tell application "System Events" to key code 3')
        break;  

      case 'FUNCTION RED':
        applescript.execString('tell application "System Events" to key code 13 using {command down}')
        break;

      case 'FUNCTION GREEN':
        applescript.execString('tell application "System Events" to key code 33 using {command down, shift down}')
        break;

      case 'FUNCTION PURPLE':
        applescript.execString('tell application "System Events" to key code 30 using {command down, shift down}')
        break;

      case 'FUNCTION PINK':
        applescript.execString('tell application "System Events" to key code 53')
        break;

      case 'FUNCTION MAGENTA':
        applescript.execString('tell application "System Events" to key code 82')
        break;

      case 'FUNCTION TURQUOISE':
        applescript.execString('tell application "System Events" to key code 45 using {shift down}')
        break;
      
      case 'SKIP SECONDS FORWARD':
      case 'CURSOR RIGHT':
        applescript.execString('tell application "System Events" to key code 124');
        break;
      
      case 'SKIP SECONDS BACKWARD':
      case 'CURSOR LEFT':
        applescript.execString('tell application "System Events" to key code 123');
        break;
      
      case 'PLAY':        
      case 'PAUSE':
      case 'STOP':
      case 'CURSOR ENTER':
        applescript.execString('tell application "System Events" to key code 49');
        break;
      
      case 'CURSOR UP':
        applescript.execString('tell application "System Events" to key code 47 using {shift down}');
        break;

      case 'CURSOR DOWN':
        applescript.execString('tell application "System Events" to key code 43 using {shift down}');
        break;
    }
  }
};

