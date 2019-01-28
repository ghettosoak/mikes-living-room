'use strict';

const neeoapi = require('neeo-sdk');
const youtubeViaChromeController = require('./lib/controller');

const controller = youtubeViaChromeController.build();

const driver = neeoapi.buildDevice('Youtube')
  .setManufacturer('Chrome')
  .setType('DVB')
  .addAdditionalSearchToken('SDK')

  .addButton({ name: 'FUNCTION BLACK', label: 'FULLSCREEN' })
  .addButton({ name: 'FUNCTION YELLOW', label: 'SWITCH TO CHROME' })
  .addButton({ name: 'FUNCTION RED', label: 'CLOSE TAB' })
  .addButton({ name: 'FUNCTION GREEN', label: 'TAB LEFT' })
  .addButton({ name: 'FUNCTION PURPLE', label: 'TAB RIGHT' })
  .addButton({ name: 'FUNCTION PINK', label: 'STOP AUTOPLAY' })
  .addButton({ name: 'FUNCTION MAGENTA', label: 'RESTART VIDEO' })
  .addButton({ name: 'FUNCTION TURQUOISE', label: 'NEXT VIDEO' })

  .addButtonGroup('Transport') // play, pause, stop
  .addButtonGroup('Transport Skip') // skip seconds forward / backward

  .addButtonGroup('Controlpad') //give controlpad play / pause / seek capability

  .addButtonHandler(controller.onButtonPressed);

module.exports = {
  devices: [
    driver,
  ],
};

