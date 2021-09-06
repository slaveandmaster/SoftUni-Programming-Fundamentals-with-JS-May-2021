function passwordGenerator(word) {
  //concat first two strings
  let concatString = word[0].concat(word[1]);
  let cypher = word.pop();
  let vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  let count = 0;
  //replace all vowels with letter from third word
  // First vowel must be replaced with the first character from third string,
  // second vowel with the second character from that string and so on.
  //  If the third string is less than the vowels count in the newly formed string you need to start over with
  //   character on 0 index.
  // When you replace all vowels reverse the new password and
  for (let index = 0; index < concatString.length; index++) {
    let ch = concatString[index];
    if (vowels.includes(ch)) {
      if (count == cypher.length) {
        count = 0;
      }
      result += cypher[count].toUpperCase();
      count++;
    } else {
      result += ch;
    }
  }
  console.log(`Your generated password is ${result.split("").reverse().join("")}`);
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
passwordGenerator([
  "areyousureaboutthisone",
  "notquitebutitrustyou",
  "disturbed",
]);
