function songs(input) {
  let songsList = [];
  class Songs {
    constructor(list, song, time) {
      this.list = list;
      this.song = song;
      this.time = time;
    }
  }
  let numberOfSongs = input.shift();
  let typeList = input.pop();
  for (let index = 0; index < numberOfSongs; index++) {
    let [list, song, time] = input[index].split("_");
    songsList.push(new Songs(list, song, time));
  }
  if (typeList == "all") {
      songsList.forEach((el) => console.log(el.song));
  }
  else {
      let sorted = songsList.filter((el) => el.list === typeList);
      sorted.forEach(el => console.log(el.song));
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
songs([4,
  'favourite_DownTown_3:14',
  'listenLater_Andalouse_3:24',
  'favourite_In To The Night_3:58',
  'favourite_Live It Up_3:48',
  'listenLater']	
  )
