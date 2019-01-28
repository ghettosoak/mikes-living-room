# Mike's Living Room NEEO Scripts
This is a collection of scripts to make my living room compatible with NEEO. I have a HTPC built from an old hackintosh, an old stereo and a Phillips TV. NEEO binds it together.

## Prerequisites
* A Mac
* VLC
* iTunes
* Chrome
* [Node.js > v6](http://nodejs.org)
* A keyboard / mouse
* A NEEO brain / remote combo

## Installation
* If you want to run only these drivers, run `npm install` in this directory.
* Otherwise, copy the desired folders from `lib` to wherever your NEEO SDK is running.
* Either way, the folders in `lib` need to have `npm install` also run in them, otherwise they won't work.

* After that, make sure your NEEO brain is on the same network as your PC. 
* Run `npm start`
* Add the 'device' from the NEEO UI
 
## Drivers
Check out the `lib` folder. There are:
* [A VLC controller](https://github.com/ghettosoak/mikes-living-room/tree/master/lib/vlc)
* [An iTunes controller](https://github.com/ghettosoak/mikes-living-room/tree/master/lib/OSXitunes)
* [A YouTube 'controller'](https://github.com/ghettosoak/mikes-living-room/tree/master/lib/youtubeViaChrome)
* [An OSX system controller](https://github.com/ghettosoak/mikes-living-room/tree/master/lib/OSXsystem)