'use strict';

const neeoapi = require('neeo-sdk');
const VLCcontroller = require('./lib/controller');

const controller = VLCcontroller.build();

const exampleDriver = neeoapi.buildDevice('Controller')
  .setManufacturer('VLC')
  .setType('DVB')
  .addAdditionalSearchToken('SDK')

  .addButton({ name: 'FUNCTION BLUE', label: 'TOGGLE FULLSCREEN' })

  .addButtonGroup('Transport') // play, pause, stop
  .addButtonGroup('Transport Scan') // next, previous
  .addButtonGroup('Transport Skip') // skip seconds forward / backward

  .addButtonGroup('Controlpad') //give controlpad play / pause / seek capability

  .addButtonHandler(controller.onButtonPressed);

module.exports = {
  devices: [
    exampleDriver,
  ],
};

