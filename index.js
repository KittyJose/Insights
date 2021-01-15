const DBConnect = require("./src/connect");

module.exports = (url, password, json) => {
    let config = {server : "https://127.0.0.1:6363", key : password, user: "admin", db:"Doc"}
    DBConnect(config, json)

    return `url: ${url}, password: ${password}, json: ${json}`;
}
