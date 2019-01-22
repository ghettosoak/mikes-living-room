'use strict';

const neeoapi = require('neeo-sdk');
const VLCcontroller = require('./lib/controller');

const controller = VLCcontroller.build();

const exampleDriver = neeoapi.buildDevice('VLC Driver')
  .setManufacturer('VLC')
  .setType('DVB')
  .addAdditionalSearchToken('SDK')

  // Then we add the capabilities of the device
  // .addButton({ name: 'POWER ON', label: 'POWER ON' })
  // .addButton({ name: 'POWER OFF', label: 'POWER OFF' })
  // .addButton({ name: 'INPUT HDMI', label: 'INPUT HDMI' })

  .addButton({ name: 'VOLUME UP', label: 'VOLUME UP' })

  .addButtonGroup('Transport') // play, pause, stop
  .addButtonGroup('Transport Skip') // skip seconds forward / backward

  // .addButtonGroup('Volume')
  .addButtonGroup('Numpad')
  .addButtonGroup('Menu and Back')
  .addButtonGroup('Controlpad')
  .addButtonGroup('Channel Zapper')
  // .addButton({ name: 'DIGIT 0', label: 'Toggle Subtitles' })
  // .addButton({ name: 'DIGIT 1', label: 'Toggle Fullscreen' })

  // Then we wire the controller handler for these capabilities
  .addButtonHandler(controller.onButtonPressed);

// console.log(exampleDriver)

/*
 * The last step is to export the driver, this makes it available to the
 * to tools like the CLI to start running the driver.
 */
module.exports = {
  devices: [
    exampleDriver,
  ],
};

