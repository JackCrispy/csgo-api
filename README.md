# CSGO API

API for getting data from CSGO servers. Playcount, Maps, Player info, etc.

## Installation 
**Install Package**: npm i csgo-api

## Usage
**Examples**

Get All Server Stats (object)
```js
const CSGO = require("csgo-api") // Import the npm package.
const srv = new CSGO.Server('IP', 'PORT') // Set the IP with port.
 
srv.getServer().then(data => console.log(data)) // Get & log the data!
```

Get Player Count (in number)
```js
const CSGO = require("csgo-api") // Import the npm package.
const srv = new CSGO.Server('IP', 'PORT') // Set the IP with port.
 
srv.getPlayerCount().then(data => console.log(data)) // Get & log the data!
```

See if the server is password protected
```js
const CSGO = require("csgo-api") // Import the npm package.
const srv = new CSGO.Server('IP', 'PORT') // Set the IP with port.
 
srv.getPasswordProtected().then(data => console.log(data)) // Get & log the data!
```
To use any of the things below, just do the same as the example above.

## **ALL FUNCTION REQUESTS**
- getServer - (object)
- getServerName - (string)
- getMaxPlayers - (number)
- getPlayerCount - (number)
- getFolder - (string)
- getAppID - (number)
- getMap - (string)
- getServer - (string)
- getGame - (string)
- getVersion - (number)
- getResponseType - (number)
- getProtocol - (number)
- getBotCount - (number)
- getServerType - (string)
- getPlatform - (string)
- getPasswordProtected - (number) 1/0
- getVacEnabled - (number) 1/0