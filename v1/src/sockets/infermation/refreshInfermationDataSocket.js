const { readFile } = require("../../scripts/utils/fileHelper");

const refreshInfermationDataSocket = async () => {
  const fileData = await readFile(
    `${process.env.GLOBAL_DATA_PATH}/device_info.json`
  ).then((data) => {
    return JSON.parse(data);
  });
  //   console.log("fileData data :",fileData);
  return fileData;
};

module.exports = refreshInfermationDataSocket;
