# Mike's iTunes NEEO Script
This is a driver for the NEEO SDK to control iTunes for OSX with your NEEO Remote. It assumes you have a keyboard and a mouse for your computer. 

## Prerequisites
* [Node.js > v6](http://nodejs.org)
* A Mac
* iTunes
* A keyboard / mouse
* A NEEO brain / remote combo
* [The NEEO SDK](https://github.com/NEEOInc/neeo-sdk)

## Howto
* Drop this folder into your NEEO SDK `lib` folder
* Run `npm install` in this folder
* Run `npm start` from the root of your SDK
 
## Buttons && Functions
The NEEO controlpad maps as follows:
* left / right: previous / next track
* ok: play / pause

All other functions can be found in the 'shortcuts' menu. I've mapped them to color functions. They are:
* FUNCTION BLUE: SWITCH TO ITUNES
