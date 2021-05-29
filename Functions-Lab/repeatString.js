function repeatString(str,repeatNumber) {
    result = '';
    for (let index = 0; index < repeatNumber; index++) {
        result += str;
        
    }
    console.log(result);
   // console.log(str.repeat(repeatNumber));
}
repeatString("abc",3);