const TerminusClient=require("./../node_modules/@terminusdb/terminusdb-client");
const query=require("./query")


const executeQuery = async (q) => {
    try {
        return await dbClient.query(q).then((results) => {
			console.log("****resukts*****", results)			
            return results
		})
		.catch(err=>{
			console.log('err', err)
		})        
    } catch (error) {
        console.error(error);
    } finally {
        console.error("done");
    }
}

function DBConnect(opts, json){
    const dbClient = new TerminusClient.WOQLClient(opts.server)
    dbClient.connect(opts)
	const WOQL=TerminusClient.WOQL
    let q=query(json)
    if(q){
		return executeQuery(q)
    }
}

module.exports = DBConnect
