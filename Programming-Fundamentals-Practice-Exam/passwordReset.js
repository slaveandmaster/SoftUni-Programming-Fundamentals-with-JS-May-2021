function passwordReset(input) {
  let password = input.shift();
  let line = input.shift();
  while (line != "Done") {
    let [command, ...params] = line.split(" ");
    if (command == "TakeOdd") {
      password = password
        .split("")
        .filter((element, index) => {
          return index % 2 != 0;
        })
        .join("");
      console.log(password);
    } else if (command == "Cut") {
      let index = Number(params[0]);
      let strLength = Number(params[1]);
      let firstPart = password.substring(0, index);
      let cutPart = password.substring(index, index + strLength);
      let lastPart = password.substring(index + strLength);
      password = firstPart + lastPart;
      console.log(password);
    } else if (command == "Substitute") {
      let match = password.indexOf(params[0]);
      if (match == -1) {
        console.log(`Nothing to replace!`);
        
      } else {
        while (match > -1) {
          password = password.replace(params[0], params[1]);
          match = password.indexOf(params[0]);
        }
        console.log(password);
      }
    }
    //console.log(password);
    line = input.shift();
  }
  console.log(`Your password is: ${password}`);
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
