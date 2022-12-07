const { readFile } = require("../../scripts/utils/fileHelper");

const refreshPlayNodesDataSocket = async () => {
  const dataFile = await readFile(`${process.env.GLOBAL_DATA_PATH}/playback.json`).then((data) => {
    return data;
  });

  return dataFile;
};

module.exports = refreshPlayNodesDataSocket;
