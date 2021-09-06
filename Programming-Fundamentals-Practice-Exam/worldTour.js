function worldTour(input) {
  let allStops = input.shift();
  let line = input.shift();
  let actions = {
      'Add Stop' : addStop,
      'Remove Stop': removeStop,
      'Switch' : swich
  };
  while (line != "Travel") {
   // let [command, ...params] = line.split(":");
    // switch (command) {
    //   case "Add Stop":
    //     addStop(params[0], params[1]);
        
    //     break;
    //   case "Remove Stop":
    //     removeStop(params[0], params[1]);
    //     break;
    //     case "Switch":
    //     swich(params[0], params[1]);
    //     break;
    //   default:
    //     break;
    // }
    // line = input.shift();
    let tokens = line.split(":");
    let command = tokens[0];
    // let action = actions[command];
    // action(tokens[1], tokens[2]);
    actions[command](tokens[1], tokens[2]); 
    line = input.shift();
    console.log(allStops);
  }
  function addStop(idx, str) {
    if (validate(idx)) {
      let firstPart = allStops.substring(0, idx);
      let middle = str;
      let lastPart = allStops.substring(idx);
      allStops = firstPart + middle + lastPart;
    }
  }
  function removeStop(startIdx, endIdx) {
    if (validate(startIdx) && validate(endIdx)) {
      let strLength = allStops.slice(startIdx,endIdx).length;
      let firstPart = allStops.substring(0, startIdx);
      let lastPart = allStops.substring(firstPart.length + strLength + 1);
      allStops = firstPart + lastPart;
    }
  }
  function swich(oldString, newString) {
      let pattern = new RegExp(oldString,'g');
      allStops = allStops.replace(pattern, newString);
  }
  function validate(idx) {
    if (idx > -1 && idx < allStops.length) {
      return true;
    }
  }
  console.log(`Ready for world tour! Planned stops: ${allStops}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
