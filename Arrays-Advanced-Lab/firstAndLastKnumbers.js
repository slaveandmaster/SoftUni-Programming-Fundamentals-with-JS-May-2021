function firstAndLastKnumbers(input) {
    let k = Number(input.shift());
    console.log(input.slice(0,k).join(' '));
    console.log(input.slice((input.length-k),input.length).join(' '));
}
firstAndLastKnumbers([2, 7, 8, 9]);
firstAndLastKnumbers([3, 6, 7, 8, 9]);
