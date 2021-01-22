const TerminusClient=require("./../node_modules/@terminusdb/terminusdb-client");
const query=require("./query")


function DBConnect(opts, json){
    const dbClient = new TerminusClient.WOQLClient(opts.server)
    console.log("dbClient", dbClient)

    try {
        dbClient.connect(opts)
		const WOQL=TerminusClient.WOQL
        let q=query(json)

        if(q){
    		dbClient.query(q).then((results) => {
    			console.log(results)
    			console.log("*******************")
    		})
    		.catch(err=>{
    			console.log('err', err)
    		})
        }

    } catch (err) {
        console.log('err', err)
    }
}

module.exports = DBConnect
