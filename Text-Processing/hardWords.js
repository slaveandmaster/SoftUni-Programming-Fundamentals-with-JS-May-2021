function hardWords(text) {
  let textArray = text[0].split(' ');
  let words = text[1];
  let result = [];
  for (let text of textArray) {
    // if (text.endsWith("_.") || text.endsWith("_,")) {
    //   text = text.substr(0, text.length - 1);
    // }
    //text = text.replace(/[,.]/, "");
    let isValid = false;
    for (let word of words) {
      if (text == "_".repeat(word.length)) {
        result.push(word);
        isValid = true;
      } else if (text == "_".repeat(word.length) + ".") {
        result.push(word + ".");
        isValid = true;
      } else if (text == "_".repeat(word.length) + ",") {
        result.push(word + ",");
        isValid = true;
      }
    }
    if (!isValid) {
      result.push(text);
    }
  }
  console.log(result.join(" "));
  console.log(textArray);
}
hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
