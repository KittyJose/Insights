const DBConnect = require("./src/connect");
const axios = require('axios');
const ARGS=require('./src/constants/args')
const TerminusClient=require("@terminusdb/terminusdb-client")

//const core = require('./node_modules/@actions/core')
//const github = require('./node_modules/@actions/github')

let opts = {server : "https://127.0.0.1:6363/", key : "root", user: "admin", db: "Doc"}
let args = process.argv.slice(2), url, key, json

/*const getHeader = async (key) => {
    const options = {
        mode: 'cors',
        redirect: 'follow',
        referrer: 'client',
    }
    options.headers = {Authorization: `Bearer ${key}`}
    return options
}

const postCall = async (url, key, json) => {
    let axiosHub = axios.create()
    const options = await getHeader(key)
    let data=JSON.parse(json)
    const result = await axiosHub.post(`${url + '/kitty'}`, data.event, options)
    return result
} */

args.map(item => {
    if (item.includes(ARGS.URL)){
        let url=item.substring(ARGS.URL.length, item.length)
    }
    else if (item.includes(ARGS.KEY)){
        let key=item.substring(ARGS.KEY.length, item.length)
    }
    else if (item.includes(ARGS.JSON)){
        let json=item.substring(ARGS.JSON.length, item.length)
        let data=JSON.parse(json)
        console.log('data', typeof data)
        const dbClient = new TerminusClient.WOQLClient(opts.server)
        dbClient.connect(opts)
    	const WOQL=TerminusClient.WOQL
        let q=WOQL.doctype("testDOC")
        dbClient.query(q).then((results) => {
			console.log(results)
			console.log("*******************")
            return results
		})
		.catch(err=>{
			console.log('err', err)
		})
        //DBConnect(opts, data)
    }

})




//DBConnect(opts, JSON.parse(json))
//postCall(url, key, json)
