'use strict';

/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 */
module.exports = class VLCcontroller {
  constructor() {
  }

  static build() {
    return new VLCcontroller();
  }

  onButtonPressed(action, deviceId) {
    // TODO implement the actions for your device here
    console.log(`[CONTROLLER] ${action} button pressed for device ${deviceId}`);

    switch (action) {

    }
  }
};
