function searchForAnumber(arr, secondArr) {
  let numberOfElements = secondArr.shift();
  let elementsForRemove = secondArr.shift();
  let searchFor = secondArr.shift();

  let result = arr.slice(0, numberOfElements);
  result.splice(0, elementsForRemove);

  let line = result.indexOf(searchFor);
  let count = 0;
  while (line > -1) {
    count++;
    line = result.indexOf(searchFor, line + 1);
  }

  console.log(`Number ${searchFor} occurs ${count} times.`);
}
searchForAnumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
