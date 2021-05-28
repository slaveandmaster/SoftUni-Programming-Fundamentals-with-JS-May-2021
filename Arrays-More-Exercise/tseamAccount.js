function tseamAccount(input) {
  let account = input.shift().split(" ");
  let cmd;
  while ((cmd = input.shift()) !== "Play!") {
    let tokens = cmd.split(" ");
    let [command, game] = tokens;
    switch (command) {
      case "Install":
        if (!account.includes(game)) {
          account.push(game);
        }
        break;
      case "Uninstall":
        if (account.includes(game)) {
          let index = account.indexOf(game);
          account.splice(index, 1);
        }
        break;
      case "Update":
        if (account.includes(game)) {
          let index = account.indexOf(game);
          let moveGame = account.splice(index, 1);
          account.push(moveGame);
        }
        break;
      case "Expansion":
        gameExp = game.split("-")[0];
        if (account.includes(gameExp)) {
          let index = account.indexOf(gameExp);
          account.splice(index + 1, 0, game.replace("-", ":"));
        }
        break;

      default:
        break;
    }
  }
  console.log(account.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
