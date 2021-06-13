function sortAnArrayBy2Criteria(arr) {
    let result = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(result.join('\n'));
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);