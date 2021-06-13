function sorting(arr) {
    let result = [];
    let numbers = arr.slice(0).sort((a,b) => b - a);
    let arrCopy = numbers.slice(0);
    for (let index = 0; index < arrCopy.length; index++) {
        let currElement;
        if (index % 2 === 0) {
            currElement = numbers.shift();
        }
        else {
            currElement = numbers.pop();
        }
        result.push(currElement);
    }
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);