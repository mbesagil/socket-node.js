const fs = require("fs");

const refreshFileListSocket = async () => {
  let fileNames = [];
  const fileData = await fs.promises.readdir(
    process.env.ANIM_PATH,
    (err, res) => {
      return res;
    }
  );

  /********cue list get file section */
  fileData.forEach((file) => {
    /**************file size get function */
    function getFilesizeInBytes(filename) {
      var stats = fs.statSync(`${process.env.ANIM_PATH}/${filename}`);
      var fileSizeInBytes = Math.round(stats.size / (1024 * 1024));
      return fileSizeInBytes + " MB";
    }
    let size = getFilesizeInBytes(file);
    // console.log(size);
    if (file.includes(".zpx")) {
      fileNames.push({ fileName: file, fileSize: size });
    }
  });

  console.log("refreshFileListSocket fileName :", fileNames);

  return fileNames;
};

module.exports = refreshFileListSocket;
