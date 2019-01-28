# Mike's OSX System NEEO Script
This is a driver for the NEEO SDK to control your OSX computer with your NEEO Remote.

## Prerequisites
* A Mac
* [Node.js > v6](http://nodejs.org)
* A NEEO brain / remote combo
* [The NEEO SDK](https://github.com/NEEOInc/neeo-sdk)

## Howto
* Drop this folder into your NEEO SDK `lib` folder
* Run `npm install` in this folder
* Run `npm start` from the root of your SDK

 
## Buttons && Functions
All functions can be found in the 'shortcuts' menu. They are:
* START SCREENSAVER
* STOP SCREENSAVER
* SYSTEM SHUTDOWN (this also kills VLC, it sometimes hangs for me)