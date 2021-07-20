function nationalCourt(peoples) {
  let people = Number(peoples.pop());
  let totalHours = 0;
  let hour = 0;
  peoples = peoples.map(Number);
  let efficency = peoples.reduce((acc, b) => acc + b, 0);
  while (people > 0) {
    hour++;
    if (hour % 4 != 0) {
        people -= efficency;
    }
  }
  totalHours = hour + breakTime;
  console.log(`Time needed: ${totalHours}h.`);
}
nationalCourt(["5", "6", "4", "20"]);
nationalCourt(["1", "2", "3", "45"]);
nationalCourt(["1", "0", "0", "3"]);
