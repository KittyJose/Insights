
const getLabel=(value)=>{
	return { "@language": "en",
		"@value": value
	 }
}


const getStringJson=(value)=>{
	return { "@type": "xsd:string",
		"@value": value
	 }
}

const getUrlJson=(value)=>{
	return {
		"@type": "xdd:url",
			"@value": value
	}
}

const getDateTimeJson=(value)=>{
	return { "@type": "xsd:dateTime",
		"@value": value
	 }
}

const getIntegerJson=(value)=>{
	return { "@type": "xsd:integer",
		"@value": value
	 }
}

const getRepositoryJson=(json, star)=>{
	let repository={}
	repository["@id"]="doc:"+json.id
	repository["@type"]="scm:Repository"
	repository["rdfs:label"]=getLabel(json.name)
	repository["scm:full_name"]=getStringJson(json.full_name)
	repository["scm:stargazers_count"]=getIntegerJson(json.stargazers_count)
	repository["scm:star"]={
		"@id": star,
		"@type": "scm:Star"
	}
	return repository
}

const getSenderJson=(json, star)=>{
	let user={}
	user["@id"]="doc:"+json.id
	user["@type"]="scm:User"
	user["rdfs:label"]=getLabel(json.login)
	user["scm:avatar_url"]=getUrlJson(json.avatar_url)
	user["scm:html_url"]=getUrlJson(json.html_url)
	user["scm:star"]={
		"@id": star,
		"@type": "scm:Star"
	}
	return user
}


const convertJsonToJsonLD=(json)=>{
	let jsonLD={}
	for(var key in json){
		let star="doc:Star_"+json.starred_at.replace(/[^\w\s]/gi, '')
		jsonLD["@id"]=star
		jsonLD["@type"]="scm:Star"
		jsonLD["rdfs:label"]=getLabel(star)
		jsonLD["scm:starred_at"]=getDateTimeJson(json.starred_at)
		jsonLD["scm:action"]=getStringJson(json.action)
	}
	return jsonLD
}


/*function query(json){
	if(json.starred_at==undefined) return
	function
	console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
	console.log('json', json)
	console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
	let WOQL=TerminusClient.WOQL
	let jsonLD=convertJsonToJsonLD(json)
	console.log("&&&& jsonLD &&&&", jsonLD)
	let q=WOQL.update_object(jsonLD)

	return q
} */
