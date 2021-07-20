function partyTime(input) {
  //   let listGuest = {};
  //   let line = input.shift();
  //   while (line != "PARTY") {
  //     let firstChar = line.charCodeAt(0);
  //     if (firstChar >= 48 && firstChar <= 57) {
  //       listGuest[line] = "VIP";
  //     } else {
  //       listGuest[line] = "regular";
  //     }
  //     line = input.shift();
  //   }
  //   for (let item of input) { 
  //     if (listGuest.hasOwnProperty(item)) {
  //       delete listGuest[item];
  //     }
  //   }
  //   console.log(Object.entries(listGuest).length);
  //   let sorted = Object.entries(listGuest).sort((a, b) => {
  //     return b[1].localeCompare(a[1]);
  //   });
  //   sorted.forEach(([guest]) => console.log(guest));
  let listGuest = {
    VIP: [],
    regular: [],
  };
  let line = input.shift();
  while (line != "PARTY") {
    let firstChar = line.charCodeAt(0);
    if (firstChar >= 48 && firstChar <= 57) {
      listGuest["VIP"].push(line);
    } else {
      listGuest["regular"].push(line);
    }
    line = input.shift();
  }
  for (const item of input) {
    if (listGuest["VIP"].includes(item)) {
      let index = listGuest["VIP"].indexOf(item);
      listGuest["VIP"].splice(index, 1);
    } else {
      if (listGuest["regular"].includes(item)) {
        let index = listGuest["regular"].indexOf(item);
        listGuest["regular"].splice(index, 1);
      }
    }
  }
  let sorted = Object.entries(listGuest).sort((a, b) => {
    return b[0].localeCompare(a[0]);
  });
  console.log(listGuest["VIP"].length + listGuest["regular"].length);
//   console.log(listGuest["VIP"].join("\n"));
//   console.log(listGuest["regular"].join("\n"));
sorted.forEach(([,guest]) => console.log(guest.join('\n')));
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
