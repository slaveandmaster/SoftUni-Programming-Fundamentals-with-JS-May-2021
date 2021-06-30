function employees(input) {
  let listEmployess = [];
  for (let index = 0; index < input.length; index++) {
    let name = input[index];
    let personalNumber = input[index].length;
    let persons = {
      name,
      personalNumber,
    };
    listEmployess.push(persons);
  }
  for (const item of listEmployess) {
      console.log(`Name: ${item.name} -- Personal Number: ${item.personalNumber}`)
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
