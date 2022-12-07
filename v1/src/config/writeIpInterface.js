const { readFile, writeFile } = require("../scripts/utils/fileHelper");
const getIp = require("../scripts/utils/ipHelper");
const fs = require("fs");

const writeIpInterface = async () => {
  let localIp = getIp();
  let oldData = await readFile(
    `${process.env.GLOBAL_DATA_PATH}/oldNetwork.json`
  ).then((res) => {
    // console.log(JSON.parse(res).oldIp);
    return JSON.parse(res);
  });
  let oldIp = oldData.oldIp;
  let oldGateway = oldData.oldGateway;
  let oldMask = oldData.oldMask;

  console.log("local ip :", localIp);
  console.log("old ip :", oldIp);


  // change index ip  configurations and save old data...
  fs.readFile(process.env.INDEX_JS_PATH, "utf8", function (err, readIndex) {
    if (err) {
      return console.log("error :", err);
    }

    // console.log("data: ", readIndex);
    if (readIndex.length > 1) console.log(" find old ip replace new");

    console.log(`pu={state:{ip:"${oldIp}"}`);
    console.log(`pu={state:{ip:"${localIp}"}`);

    var result = readIndex.replace(
      `{state:{ip:"${oldIp}"}`,
      `{state:{ip:"${localIp}"}`
    );

    fs.writeFile(process.env.INDEX_JS_PATH, result, "utf8", function (err) {
      if (err) return console.log(err);
      console.log("index.html write new ıp");
    });

    /****************old ip saved local oldIp.txt */
    let writeOldData = {
      oldIp: `${localIp}`,
      oldGateway: `${oldGateway}`,
      oldMask: `${oldMask}`,
    };

    console.log("write old Data :", writeOldData);
    writeFile(`oldNetwork.json`, writeOldData);
  });
};

module.exports = () => {
  writeIpInterface();
};
