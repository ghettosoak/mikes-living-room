'use strict';

const neeoapi = require('neeo-sdk');
const OSXSystemController = require('./lib/controller');

const controller = OSXSystemController.build();

const driver = neeoapi.buildDevice('System')
  .setManufacturer('OSX')
  .setType('ACCESSORY')
  .addAdditionalSearchToken('SDK')

  .addButton({ name: 'FUNCTION BLUE', label: 'START SCREENSAVER' })
  .addButton({ name: 'FUNCTION RED', label: 'STOP SCREENSAVER' })
  .addButton({ name: 'FUNCTION GREEN', label: 'SYSTEM SHUTDOWN' })

  .addButtonHandler(controller.onButtonPressed);

module.exports = {
  devices: [
    driver,
  ],
};

