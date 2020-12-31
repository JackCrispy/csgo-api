const axios = require('axios')

class Server {

     constructor(ip, port) {
          if (!ip) throw Error('You need to provide a valid IP & Port.')
          this.ip = ip;
          this.port = port;
     }

     getServer() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               send(body.data);

               }).catch(function(error) {
               err(error);
               });
          })
     }
               
     getServerName() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let servername = body.data.game.info.server_name;
               send(servername);

               }).catch(function(error) {
               err(error);
               });
          })
     }

     getMaxPlayers() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let max_players = body.data.game.info.max_players;
               send(max_players);

               }).catch(function(error) {
               err(error);
               });
          })
     }

     getPlayerCount() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let player_count = body.data.game.info.player_count;
               send(player_count);

               }).catch(function(error) {
               err(error);
               });
          })
     }

     getFolder() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let player_count = body.data.game.info.folder;
               send(player_count);

               }).catch(function(error) {
               err(error);
               });
          })
     }
     getAppID() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let app_id = body.data.game.info.app_id;
               send(app_id);

               }).catch(function(error) {
               err(error);
               });
          })
     }
     getMap() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let map = body.data.game.info.map;
               send(map);

               }).catch(function(error) {
               err(error);
               });
          })
     }
     getGame() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let game = body.data.game.info.game;
               send(game);

               }).catch(function(error) {
               err(error);
               });
          })
     }
     getVersion() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let version = body.data.game.info.version;
               send(version);

               }).catch(function(error) {
               err(error);
               });
          })
     }
     getResponseType() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let response_type = body.data.game.info.response_type;
               send(response_type);

               }).catch(function(error) {
               err(error);
               });
          })
     }
     getProtocol() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let protocol = body.data.game.info.protocol;
               send(protocol);

               }).catch(function(error) {
               err(error);
               });
          })
     }
     getBotCount() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let bot_count = body.data.game.info.bot_count;
               send(bot_count);

               }).catch(function(error) {
               err(error);
               });
          })
     }
     getServerType() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let server_type = body.data.game.info.server_type;
               send(server_type);

               }).catch(function(error) {
               err(error);
               });
          })
     }
     getPlatform() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let platform = body.data.game.info.platform;
               send(platform);

               }).catch(function(error) {
               err(error);
               });
          })
     }
     getPasswordProtected() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let password_protected = body.data.game.info.password_protected;
               send(password_protected);

               }).catch(function(error) {
               err(error);
               });
          })
     }
     getVacEnabled() {
          return new Promise((send, err) => {
               axios.get(`http://query.li/api/csgo/${this.ip}/${this.port}`)
               .then(function(body) {
               let vac_enabled = body.data.game.info.vac_enabled;
               send(vac_enabled);

               }).catch(function(error) {
               err(error);
               });
          })
     }
}

module.exports.Server = Server;