function login(input) {
  let username = input.shift();
  let fails = 0;
  for (let i = 0; i < input.length; i++) {
    let reversedLogin = input[i].split("").reverse().join("");
    if (username === reversedLogin) {
      console.log(`User ${username} logged in.`);
    } else if (username !== reversedLogin) {
      fails++;
      if (fails > 3) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
    }
  }
}
//login(["Acer", "login", "go", "let me in", "recA"]);
//login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
