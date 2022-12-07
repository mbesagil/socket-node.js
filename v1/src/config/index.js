const server = require("./server");
const writeIpInterface = require("./writeIpInterface")
module.exports = () => {
    server();
    // writeIpInterface();
}