function houseParty(arr) {
  let listGuests = [];
  for (let index = 0; index < arr.length; index++) {
    let [guest, ...params] = arr[index].split(' ');
    if (params[1] === "going!") {
      if (listGuests.includes(guest)) {
        console.log(`${guest} is already in the list!`);
      }
      else {
          listGuests.push(guest);
      }
    }
    if (params[1] === "not") {
        if (listGuests.includes(guest)) {
            let idx = listGuests.indexOf(guest);
            listGuests.splice(idx,1);
        }
        else {
            console.log(`${guest} is not in the list!`)
        }
    }
  }
  console.log(listGuests.join('\n'));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)