# Mike's VLC NEEO Script
This is a driver for the NEEO SDK to control VLC with your NEEO Remote. It assumes you have a keyboard and a mouse for your computer. 

## Prerequisites
* [Node.js > v6](http://nodejs.org)
* A Mac
* [VLC](https://www.videolan.org/vlc/index.html)
* A keyboard / mouse
* A NEEO brain / remote combo
* [The NEEO SDK](https://github.com/NEEOInc/neeo-sdk)

## Howto
* Drop this folder into your NEEO SDK `lib` folder
* Run `npm install` in this folder
* Run `npm start` from the root of your SDK
 
## Buttons && Functions
The NEEO controlpad maps as follows:
* left / right: scrub forward / backwards 5sec
* up / ok: play / pause
* down: stop

All other functions can be found in the 'shortcuts' menu. They are:
* TOGGLE FULLSCREEN
* SWITCH TO VLC
* TURN OFF SUBTITLES