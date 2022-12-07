const { writeFile } = require("../../scripts/utils/fileHelper");

const userConfigSocket = (data) => {
  console.log("user Config data", data);
  writeFile("deneme.json", data);
};

module.exports = userConfigSocket;
