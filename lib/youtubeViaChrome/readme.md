# Mike's YouTube NEEO Script
This is a driver for the NEEO SDK to control YouTube with your NEEO Remote. It assumes you have a keyboard and a mouse for your computer, and that you're running Chrome. Other browsers would be easy enough to  I like to open up a series of videos with the keyboard / mouse, and then kick back with the remote in hand.

## Prerequisites
* A Mac
* Chrome
* [Node.js > v6](http://nodejs.org)
* A keyboard / mouse
* A NEEO brain / remote combo
* [The NEEO SDK](https://github.com/NEEOInc/neeo-sdk)

## Howto
* Drop this folder into your NEEO SDK `lib` folder
* Run `npm install` in this folder
* Run `npm start` from the root of your SDK

## I don't use Chrome
You can change the applescript call in lib/controller.js and index.js to reflect your browser of choice. For example, Firefox would look like this:
`applescript.execString('tell application "Firefox" to activate')`
 
## Buttons && Functions
The NEEO controlpad maps as follows:
* up / down: control speed of video
* left / right: scrub forward / backwards 5sec
* ok: play / pause

All other functions can be found in the 'shortcuts' menu. I've mapped them to color functions. They are:
* FUNCTION BLACK:     FULLSCREEN
* FUNCTION YELLOW:    SWITCH TO CHROME
* FUNCTION RED:       CLOSE TAB
* FUNCTION GREEN:     (switch to) TAB LEFT
* FUNCTION PURPLE:    (switch to) TAB RIGHT
* FUNCTION PINK:      STOP AUTOPLAY
* FUNCTION MAGENTA:   RESTART VIDEO
* FUNCTION TURQUOISE: NEXT VIDEO (next in playlist, or 'up next')