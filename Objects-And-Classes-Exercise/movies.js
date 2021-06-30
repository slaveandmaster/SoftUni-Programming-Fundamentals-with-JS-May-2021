function movies(movieList) {
  //     Write a function that stores information about movies inside an array.
  //      movies object info must be name, director and date. You can receive several types of input:
  // •	"addMovie {movie name}" – add the movie
  // •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
  // •	"{movie name} onDate {date}" – check if the movie exists and then add the date
  // At the end print all the movies that have all the info
  //  (if the movie has no director, name or date, don’t print it) in JSON format.
  let movie = {};
  let line;
  while ((line = movieList.shift())) {
    if (line.includes("addMovie")) {
      let name = line.split("addMovie ")[1];
      if (!movie.hasOwnProperty(name)) {
        movie[name] = { name: name };
      }
    } else if (line.includes("directedBy")) {
      let [movieName, director] = line.split(" directedBy ");
      if (movie.hasOwnProperty(movieName)) {
        movie[movieName]["director"] = director;
      }
    } else {
      if (line.includes("onDate")) {
        let [movieName, date] = line.split(" onDate ");

        if (movie.hasOwnProperty(movieName)) {
          movie[movieName]["date"] = date;
        }
      }
    }
  }
  for (const item in movie) {
    let name = movie[item];
    if (
      name.hasOwnProperty("name") &&
      name.hasOwnProperty("director") &&
      name.hasOwnProperty("date")
    ) {
      console.log(JSON.stringify(name));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
