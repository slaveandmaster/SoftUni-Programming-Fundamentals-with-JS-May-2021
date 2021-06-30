function towns(townInfo) {
    for (let index = 0; index < townInfo.length; index++) {
        let [ town, latitude, longitude ] = townInfo[index].split(' | ');
        let obj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(obj);
        
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])