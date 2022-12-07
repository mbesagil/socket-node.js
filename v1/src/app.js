const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const config = require("./config/index");

config();

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
  maxHttpBufferSize: 1e9,
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

const {
  loginSocket,
  userConfigSocket,
  saveRunlistSocket,
  refreshRunListSocket,
  savePlayNodesDataSocket,
  refreshPlayNodesDataSocket,
  networkSettingsDataSocket,
  uploadFileSocket,
  refreshFileListSocket,
  deleteFileSocket,
  refreshInfermationDataSocket,
} = require("./sockets/index");

server.listen(process.env.APP_PORT, () => {
  console.log(process.env.APP_PORT + " PORT connect...");

  io.on("connection", (socket) => {
    console.log("Connected Socket");

    /***********************************************user config login request */
    //login request
    socket.on("LOGINQUERY", async (DataQuery) => {
      const loginData = await loginSocket(DataQuery).then((data) => {
        return data;
      });
      socket.emit("ACCESSSTATUS", loginData);
      // console.log("get status login data :", loginData);
    });

    //User config
    socket.on("NEWUSERCONFİG", (data) => {
      userConfigSocket(data);
    });

    /***********************************************Control panel  */

    //save run list data
    socket.on("SAVERUNLISTDATA", (data) => {
      saveRunlistSocket(data);
    });

    // get run list data
    socket.on("REFRESHRUNLIST", async (data) => {
      const runListData = await refreshRunListSocket(data).then((data) => {
        return data;
      });
      socket.emit("SENDRUNLISTDATA", runListData);
      // console.log("appe gelen data runList", runListData);
    });

    //control events
    socket.on("CONTROLEVENTS", (data) => {
      console.log(data);
      // mqttClient.publish("/controlEvents", JSON.stringify(data));
    });

    //control run list
    socket.on("RUNRUNLIST", (data) => {
      console.log(data);
      // mqttClient.publish("/controlRun", JSON.stringify(data));
    });

    /***********************************************play-nodes panel  */

    socket.on("SAVEPLAYNODESDATA", (data) => {
      savePlayNodesDataSocket(data);
    });

    socket.on("REFRESHPLAYNODESDATA", async () => {
      const playnodesData = await refreshPlayNodesDataSocket();
      socket.emit("SENDPLAYNODESDATA", playnodesData);
      // console.log(playnodesData);
    });

    socket.on("SHAREPLAYNODESDATA", (data) => {
      // mqttClient.publish("/playbackdata", JSON.stringify(data));
      console.log("share nodes info");
    });

    /***********************************************settings panel  */
    socket.on("GENEREALSETTİNGSDATA", (data) => {
      // mqttClient.publish("/systems", JSON.stringify(data));
      console.log(this.data);
    });

    socket.on("SYNCSETTİNGSDATA", (data) => {
      // mqttClient.publish("/systems", JSON.stringify(data));
      console.log(this.data);
    });

    socket.on("NETWORKSETTİNGSDATA", (data) => {
      networkSettingsDataSocket(data);
    })



    
    /***********************************************file-Upload panel  */

    socket.on("UPLOADFİLE", (data) => {
      uploadFileSocket(data);
    });

    socket.on("REFRESHFİLELİST", async () => {
      const fileData = await refreshFileListSocket();
      socket.emit("FILELISTDATA", fileData);
      // console.log("app REFRESHFİLELİST",fileData);
    });

    socket.on("DELETEFILE", (deleteData) => {
      deleteFileSocket(deleteData);
    });

    /***********************************************Information panel  */
    socket.on("REFRESHINFERMATIONDATA", async () => {
      const infoData = await refreshInfermationDataSocket().then((data) => {
        return data;
      });
      socket.emit("SENDINFERMATIONDATA", infoData);
      // console.log("appe gelen info data  :",infoData);
    });

    /************************************************test panel */
    socket.on("RUNTESTCOLORDATA", (data) => {
      console.log(data);
      // mqttClient.publish("/testRunColor", JSON.stringify(data));
    });

    /*****************run test count events  */
    socket.on("RUNTESTCOUNTDATA", (data) => {
      console.log(data);
      // mqttClient.publish("/testRunCount", JSON.stringify(data));
    });

    /*****************test events control */
    socket.on("TESTEVENTS", (data) => {
      console.log(data);
      // mqttClient.publish("/testEvents", JSON.stringify(data));
    });






    //end socket
  });
});
