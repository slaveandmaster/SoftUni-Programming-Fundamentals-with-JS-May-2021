function convertToObject(params) {
    let obj = JSON.parse(params);
    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }   
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');