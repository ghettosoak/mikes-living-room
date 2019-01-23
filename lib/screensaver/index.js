'use strict';

const neeoapi = require('neeo-sdk');
const screenSaverController = require('./lib/controller');

const controller = screenSaverController.build();

const exampleDriver = neeoapi.buildDevice('Screensaver')
  .setManufacturer('OSX')
  .setType('ACCESSORY')
  .addAdditionalSearchToken('SDK')

  .addButton({ name: 'FUNCTION BLUE', label: 'START SCREENSAVER' })
  .addButton({ name: 'FUNCTION RED', label: 'STOP SCREENSAVER' })

  .addButtonHandler(controller.onButtonPressed);

module.exports = {
  devices: [
    exampleDriver,
  ],
};

