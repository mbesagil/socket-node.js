const { writeFile } = require("../../scripts/utils/fileHelper");

const saveRunListSocket = (data) => {
  console.log("Save run list file: ", data);
  writeFile("denemeRun.json", data);
};

module.exports = saveRunListSocket;
