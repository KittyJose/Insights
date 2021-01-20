//const DBConnect = require("./src/connect");


const core = require('@actions/core');
const github = require('@actions/github');

console.log("I am here")

try {

  const database = core.getInput('database');
  console.log(`database ${database}!`);

  const key = core.getInput('key');

  console.log(`key ${key}!`);

  const json = core.getInput('json');

  core.setOutput("results", "teady");
} catch (error) {
  core.setFailed(error.message);
}


module.exports = (database, key, json) => {
    //let config = {server : "https://127.0.0.1:6363", key : "root", user: "admin", db:"Doc"}
    //DBConnect(config, json)

    let inp= `database: ${database}, key: ${key}, json: ${json}`;
    console.log(inp)

    return `database: ${database}, key: ${key}, json: ${json}`;
}
