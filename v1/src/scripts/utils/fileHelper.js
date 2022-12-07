const fs = require("fs");

const readFile = async (filePath) => {
  const readData = fs.readFileSync(`${filePath}`, "utf8", (err, jsonString) => {
    // console.log(jsonString);
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    return jsonString;
    // console.log(jsonString);
  });
  return readData;
};

const writeFile = (fileName, data) => {
  var jsonContent = JSON.stringify(data);
  console.log("jsonContent:", jsonContent);

  fs.writeFile(
    `${process.env.GLOBAL_DATA_PATH}/${fileName}`,
    jsonContent,
    function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }
      console.log(`${fileName} file has been saved.`);
    }
  );
};

const deleteFile = async (fileName) => {
  fs.readdir(process.env.ANIM_PATH, (err, res) => {
    res.forEach((element) => {
      if (element === `${fileName}.zpx`) {
        fs.unlink(`${process.env.ANIM_PATH}/${fileName}.zpx`, (err, res) => {
          if (err) console.log(err);
          console.log(`${fileName}.zpx file deleted`);
        });
      }
    });
  });

  // fs.unlink(`${filePath}`, (err, res) => {
  //   if (err) console.log(err);
  //   console.log("file deleted");
  // });
};

module.exports = {
  readFile,
  writeFile,
  deleteFile,
};
