const fs = require("fs");
const { readFile } = require("../../scripts/utils/fileHelper");

const loginSocket = async (queryData) => {
  const dataFile = await readFile(`${process.env.GLOBAL_DATA_PATH}/authdata.json`).then((data) => {
    return JSON.parse(data);
  });

  let authLoginData = dataFile;

  if (dataFile) {
    // console.log(authLoginData.name,authLoginData.password);
    //success login
    if (
      queryData.name === authLoginData.name &&
      queryData.password === authLoginData.password
    ) {
      return "solus access provided";
    }
    //password false access denied
    else if (
      queryData.name === authLoginData.name &&
      queryData.password != authLoginData.password
    ) {
      return "wrong password";
    }
    //name false access denied
    else if (queryData.name != authLoginData.name) {
      return "wrong username";
    }
  }
};
module.exports = loginSocket;
