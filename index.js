const DBConnect = require("./src/connect");

module.exports = (database, key, json) => {
    //let config = {server : "https://127.0.0.1:6363", key : "root", user: "admin", db:"Doc"}
    //DBConnect(config, json)
    let inp= `database: ${database}, key: ${key}, json: ${json}`;
    console.log(inp)

    return `database: ${database}, key: ${key}, json: ${json}`;
}
