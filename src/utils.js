function isJson(str) {
    try {
        let m=JSON.parse(str);
		console.log('mmm', m)
		return true
    } catch (e) {
        return false;
    }
}

module.exports = isJson
