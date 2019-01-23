'use strict';

const neeoapi = require('neeo-sdk');
const screenSaverController = require('./lib/controller');

const controller = screenSaverController.build();

const exampleDriver = neeoapi.buildDevice('Screen Saver')
  .setManufacturer('OSX')
  .setType('ACCESSORY')
  .addAdditionalSearchToken('SDK')

  .addButton({ name: 'FUNCTION BLUE', label: 'START SCREENSAVER' })

  .addButtonHandler(controller.onButtonPressed);

module.exports = {
  devices: [
    exampleDriver,
  ],
};

