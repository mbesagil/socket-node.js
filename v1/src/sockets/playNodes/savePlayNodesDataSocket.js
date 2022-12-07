const { writeFile } = require("../../scripts/utils/fileHelper");

const savePlayNodesDataSocket = (data) => {
  console.log("play-nodes saving data :", data);
  writeFile("playback.json", data);
};

module.exports = savePlayNodesDataSocket;
