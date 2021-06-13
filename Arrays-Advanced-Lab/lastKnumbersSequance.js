function lastKnumbersSequance(n, k) {
    let result = Array(n);
    result[0] = 1;
    for (let currentElement = 1; currentElement < n; currentElement++) {
        let startIdx = Math.max(0,(currentElement - k)); //prev element index
        let endIdx = currentElement - 1;
        let sum = 0;
        for (let j = startIdx; j <= endIdx; j++) { 
                sum += result[j];
        }
        result[currentElement] = sum;
    }
    console.log(result.join(' '));
}
lastKnumbersSequance(6, 3);
lastKnumbersSequance(8, 2)