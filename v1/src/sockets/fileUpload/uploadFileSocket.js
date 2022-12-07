const fs = require("fs");

const uploadFileSocket = (file) => {
//   console.log("uploadFileSocket data:", file);
//   console.log(file.name); // <Buffer 25 50 44 ...>
  let bufData = file.data.toString("Binary");
  // console.log(bufData);

  //save the zpx to the animations
  fs.writeFile(
    `${process.env.ANIM_PATH}/${file.name}`,
    bufData,
    "Binary",
    (err) => {
      console.log({ message: err ? "failure UPLOADED" : "success UPLOADED" });
    }
  );
};

module.exports = uploadFileSocket;
