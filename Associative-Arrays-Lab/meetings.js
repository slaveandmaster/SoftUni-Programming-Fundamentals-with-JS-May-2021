function meetings(input) {
  let meetings = {};
  for (let line of input) {
    let [day, name] = line.split(" ");
    if (!meetings.hasOwnProperty(day)) {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  for (const key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
