//for authenticate
module.exports.loginSocket = require("./authenticate/loginSocket");
module.exports.userConfigSocket = require("./authenticate/userConfigSocket");


//for control
module.exports.saveRunlistSocket = require("./control/saveRunListSocket");
module.exports.refreshRunListSocket = require("./control/refreshRunListSocket");

//for play-nodes
module.exports.savePlayNodesDataSocket = require("./playNodes/savePlayNodesDataSocket");
module.exports.refreshPlayNodesDataSocket = require("./playNodes/refreshPlayNodesDataSocket");

//for settings 
module.exports.networkSettingsDataSocket = require("./settingsNetwork/networkSettingsDataSocket");



//for upload-files
module.exports.uploadFileSocket = require("./fileUpload/uploadFileSocket");
module.exports.refreshFileListSocket = require("./fileUpload/refreshFileListSocket");
module.exports.deleteFileSocket = require("./fileUpload/deleteFileSocket");

//for infermatiton
module.exports.refreshInfermationDataSocket = require("./infermation/refreshInfermationDataSocket");
