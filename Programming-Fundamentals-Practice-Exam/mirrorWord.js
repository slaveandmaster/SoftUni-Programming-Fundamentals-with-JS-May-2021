function mirrorWord(input) {
  let validWords = [];
  let pattern = /([@|#])(?<first>[A-Za-z]{3,})(\1)(\1)(?<second>[A-Za-z]{3,})(\1)/g;
  let match = null;
  //let match = pattern.exec(input);
    while (match = pattern.exec(input)) {
        validWords.push(match.groups);
    }
        console.log(validWords.length? `${validWords.length} word pairs found!`:`No word pairs found!`);
        let mirrorWords = validWords.filter(el => checkEqual(el));
        if (mirrorWords.length > 0) {
            console.log(`The mirror words are:`);
            console.log(mirrorWords.map((pair) => `${pair.first} <=> ${pair.second}`).join(', '));

        }
        else {
            console.log(`No mirror words!`);
        }
        function checkEqual(word) {
            let reverseWord = word.second.split('').reverse().join('');
            return word.first === reverseWord;
        }
}
mirrorWord([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
mirrorWord(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
mirrorWord(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
