'use strict';
const axios = require('axios');

function makeRequest(command) {
  axios({
    url: 'http://localhost:8080/requests/status.json',
    method: 'get',
    params: command,
  });
}

module.exports = class VLCcontroller {
  constructor() {}

  static build() {
    return new VLCcontroller();
  }

  onButtonPressed(action, deviceId) {
    switch (action) {        
      case 'FUNCTION BLUE':
        makeRequest({ command: 'fullscreen' });
        break;
      
      case 'SKIP SECONDS FORWARD':
      case 'CURSOR RIGHT':
        makeRequest({
          command: 'seek',
          val: '+5'
        });
        break;
      
      case 'SKIP SECONDS BACKWARD':
      case 'CURSOR LEFT':
        makeRequest({
          command: 'seek',
          val: '-5'
        });
        break;

      case 'NEXT':
        makeRequest({ command: 'pl_next' })
        break;

      case 'PREVIOUS':
        makeRequest({ command: 'pl_previous' })
        break;
      
      case 'PLAY':        
      case 'PAUSE':
      case 'CURSOR ENTER':
      case 'CURSOR UP':
        makeRequest({ command: 'pl_pause' });
        break;
      
      case 'STOP':
      case 'CURSOR DOWN':
        makeRequest({ command: 'pl_stop' });
        break;
    }
  }
};

