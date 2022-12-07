const { readFile, writeFile } = require("../../scripts/utils/fileHelper");
const fs = require("fs");
const networkSettingsDataSocket = async (data) => {
  console.log("istek atıldı", data);
  let newIp = data.ip;
  let newGateway = data.gateway;
  let newMask = data.mask;
  const oldData = await readFile(
    `${process.env.GLOBAL_DATA_PATH}/oldNetwork.json`
  ).then((res) => {
    return JSON.parse(res);
  });
  console.log("oldData :", oldData);
  let oldIp = oldData.oldIp;
  let oldGateway = oldData.oldGateway;
  let oldMask = oldData.oldMask;

  fs.readFile(process.env.NETWORK_CONFIG, "utf8", function (err, readIndex) {
    if (err) {
      return console.log(err);
    }
    //   console.log("data: ", readIndex);

    if (readIndex.length > 1) console.log("File Scanner...");
    else console.log("Error : File not found");

    /**********************************cahange old ip write new ip */
    

let saveDataNetwork =  
`config interface 'loopback'
    option device 'lo'
    option proto 'static'
    option ipaddr '127.0.0.1'
    option netmask '255.0.0.0'

config globals 'globals'
    option ula_prefix 'fdc8:560b:73a8::/48'

config device
    option name 'br-lan'
    option type 'bridge'
    list ports 'eth0'

config interface 'lan'
    option proto 'static'
    option ipaddr '${newIp}'
    option netmask '${newMask}'
    option gateway '${newGateway}'
    list dns '8.8.8.8'
    option device 'eth0'`;

        fs.writeFileSync(`${process.env.GLOBAL_DATA_PATH}/denemeNetwork`,saveDataNetwork )
   
    // fs.writeFile(systemPath, resultIp, "utf8", function (err) {
    //   if (err) return console.log(err);
    //   console.log("system ip write new ip");
    // });

    // /****************old mask saved local oldMask.txt */
    // fs.writeFile(
    //   `${globalDataPath}/oldIp.txt`,
    //   localSysIp,
    //   "utf8",
    //   function (err) {
    //     if (err) return console.log(err);
    //     console.log("oldIp.txt write new ip");
    //   }
    // );
  });
};

module.exports = networkSettingsDataSocket;
