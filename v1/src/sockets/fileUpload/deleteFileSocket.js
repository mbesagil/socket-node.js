const { deleteFile } = require("../../scripts/utils/fileHelper");

const deleteFileSocket = (data) => {
    // console.log(data);
    deleteFile(data);
    // console.log(deleteData);
    //   fs.unlink(`/etc/artnet/animasyon/${deleteData}`, (err) => {
        //     if (err) console.log(err);
        //     console.log("file deleted");
        //   });
}

module.exports = deleteFileSocket;