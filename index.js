//const DBConnect = require("./src/connect");


const core = require('./node_modules/@actions/core')
const github = require('./node_modules/@actions/github')
//const axios = require('axios');


try {
    //let axiosHub = axios.create()

    let databaseUrl = core.getInput('database')
    let key = core.getInput('key')
    let json = core.getInput('json')

    console.log(`database ${databaseUrl}!`)
    console.log(`key ${key}!`)
    console.log(`json ${json}!`)
    console.log(`json ${json.job}!`)

    /*const getHeader = async () => {
        const options = {
            mode: 'cors',
            redirect: 'follow',
            referrer: 'client',
        }
        options.headers = {Authorization: `Bearer ${key}`}
        return options
    }

    const postCall = async () => {
        const options = await getHeader()
        const result = await axiosHub.post(`${databaseUrl}`, json, options)
        return result
    }

    postCall()

    const results = axios({
        method: 'post',
        url: '/kitty',
        data: {json}
    }) */

    core.setOutput("results", results);

} catch (error) {
    core.setFailed(error.message);
}


module.exports = (database, key, json) => {
    //let config = {server : "https://127.0.0.1:6363", key : "root", user: "admin", db:"Doc"}
    //DBConnect(config, json)

    let inp= `database: ${databaseUrl}, key: ${key}, json: ${json}`;
    console.log(inp)

    return `database: ${databaseUrl}, key: ${key}, json: ${json}`;
}
