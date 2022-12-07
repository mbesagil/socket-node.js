const { readFile } = require("../../scripts/utils/fileHelper");

const refreshRunListSocket = async () => {
  const dataFile = await readFile(
    `${process.env.GLOBAL_DATA_PATH}/denemeRun.json`
  ).then((data) => {
    return JSON.parse(data);
  });
  // console.log("refreshRunListSocket runList data:",dataFile);

  return dataFile;
};

module.exports = refreshRunListSocket;
