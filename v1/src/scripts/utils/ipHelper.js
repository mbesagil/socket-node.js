const getIp = () => {
  ("use strict");
  const { networkInterfaces } = require("os");
  const nets = networkInterfaces();
  const results = Object.create(null); // Or just '{}', an empty object

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
      const familyV4Value = typeof net.family === "string" ? "IPv4" : 4;
      if (net.family === familyV4Value && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }
  console.log(results);

  let localIp = "";
  if (results["eth0"]) {
    localIp = results["eth0"][0];
  } else if (results["Wi-Fi"]) {
    localIp = results["Wi-Fi"][0];
  } else {
    console.log("No Valid Ip Found");
  }
  return localIp;
};

module.exports = getIp;
