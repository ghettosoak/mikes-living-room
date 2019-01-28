'use strict';

const neeoapi = require('neeo-sdk');
const OSXiTunesController = require('./lib/controller');

const controller = OSXiTunesController.build();

const driver = neeoapi.buildDevice('iTunes')
  .setManufacturer('OSX')
  .setType('DVB')
  .addAdditionalSearchToken('SDK')

  .addButton({ name: 'FUNCTION BLUE', label: 'SWITCH TO ITUNES' })

  .addButtonGroup('Transport') // play, pause, stop
  .addButtonGroup('Transport Scan') // next, previous

  .addButtonGroup('Controlpad') //give controlpad play / pause / seek capability

  .addButtonHandler(controller.onButtonPressed);

module.exports = {
  devices: [
    driver,
  ],
};

