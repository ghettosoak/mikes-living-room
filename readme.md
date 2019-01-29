# Mike's Living Room NEEO Scripts
This is a collection of scripts to make my living room compatible with NEEO. I have a HTPC built from an old hackintosh, an old stereo and a Phillips TV. NEEO binds it all together.

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

## Important
A lot of functionality is bound to color functions within NEEO. For example, the 'System Shutdown' command is bound to `FUNCTION GREEN`. This means that you will technically send `FUNCTION GREEN` to NEEO (like in a recipe); but within the context of the script, it will recieve the 'System Shutdown' command. The individual mappings are located within the drivers' readmes.
 
## Drivers
Check out the `lib` folder. There are:
* [A VLC controller](https://github.com/ghettosoak/mikes-living-room/tree/master/lib/vlc)
* [An iTunes controller](https://github.com/ghettosoak/mikes-living-room/tree/master/lib/OSXitunes)
* [A YouTube 'controller'](https://github.com/ghettosoak/mikes-living-room/tree/master/lib/youtubeViaChrome)
* [An OSX system controller](https://github.com/ghettosoak/mikes-living-room/tree/master/lib/OSXsystem)

## Further Functionality
If you have any other functionality, let me know at (e@ject.ch)[mailto:e@ject.ch].