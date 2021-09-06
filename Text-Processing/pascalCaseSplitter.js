function solve(text) {
  let result = text[0];
  let lower = text.toLocaleLowerCase();
  for (let index = 1; index < text.length; index++) {
    if (text[index] != lower[index]) {
      result += ", ";
    }

    result += text[index];
  }
  console.log(result);
}

function solve2(text) {
  let result = text[0];
  for (let index = 1; index < text.length; index++) {
    let code = text[index].charCodeAt(0);
    if (code >= 65 && code <= 90) {
      result += ", ";
    }

    result += text[index];
  }
  console.log(result);
}

solve2("SplitMeIfYouCanHaHaYouCantOrYouCan");
solve("HoldTheDoor");
solve("ThisIsSoAnnoyingToDo");
