function hashtag(text) {
  let words = text.split(" ");
  let result = [];
  for (let word of words) {
    if (word[0] == "#" && word.length > 1) {
      let isValid = true;
      for (let ch of word.substring(1)) {
        let code = ch.charCodeAt(0);
        if (code < 65 || code > 122 || (code >= 91 && code <= 96)) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        result.push(word.substring(1));
      }
    }
  }
  console.log(result.join("\n"));
}
hashtag("Nowadays everyone uses # to tag a #special word in #socialMedia");
