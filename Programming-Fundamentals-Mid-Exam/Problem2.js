function solve(input) {
  let friendsList = input.shift().split(", ");
  let line = input.shift();
  while (line != "Report") {
    let [cmd, ...items] = line.split(" ");
    switch (cmd) {
      case "Blacklist":
          blacklist(items[0]);
        break;
      case "Error":
        let idx = Number(items[0])
          error(idx);
        break;
      case "Change":
          let index = Number(items[0])
          change(index,items[1]);
        break;
      default:
        break;
    }

    line = input.shift();
  }
  let sumLost = friendsList.filter((x) => x == "Lost").length;
  let sumBlackList = friendsList.filter((x) => x == "Blacklisted").length; 
  console.log(`Blacklisted names: ${sumBlackList}`);
  console.log(`Lost names: ${sumLost}`);
  console.log(friendsList.join(" "));

  //commands functions
  //blacklist name- change the given name to "Blacklisted" and print "{name} was blacklisted."
  //if there is no such name print "{name} was not found."
  function blacklist(name) {
    if (friendsList.includes(name)) {
      let idx = friendsList.indexOf(name);
      friendsList[idx] = "Blacklisted";
      console.log(`${name} was blacklisted.`);
    } else {
      console.log(`${name} was not found.`);
    }
  }
  //error index - if the index is valid and the username ath the given index is not blacklisted ot already lost due error ,
  //change it to "Lost" and print "{name} was lost due to an error."
  function error(index) {
    if (index >= 0 && index < friendsList.length) {
      if (friendsList[index] != "Blacklisted" && friendsList[index] != "Lost") {
        let currentName = friendsList[index]
        friendsList[index] = "Lost";
        console.log(`${currentName} was lost due to an error.`);
      }
    }
  }

  //change index new name
  //if index is valid change the current name with the new one and print "{current name} changed his name to {new name}"
  function change(index, newName) {
    if (index >= 0 && index < friendsList.length) {
      let currentName = friendsList[index];
      friendsList[index] = newName;
      console.log(`${currentName} changed his username to ${newName}.`);
    }
  }
}
solve(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
solve([
  "Mike, John, Eddie, William",
  "Error 3",
  "Error 3",
  "Change 0 Mike123",
  "Report",
]);
solve([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);
