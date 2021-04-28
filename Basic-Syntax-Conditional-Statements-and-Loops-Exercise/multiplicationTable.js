function multiplicationTable(input) {
    let multiply = Number(input);
    for (let i = 1; i <= 10; i++) {
        console.log(`${multiply} X ${i} = ${multiply*i}`);
        
    }
}
multiplicationTable(5);
multiplicationTable(2);