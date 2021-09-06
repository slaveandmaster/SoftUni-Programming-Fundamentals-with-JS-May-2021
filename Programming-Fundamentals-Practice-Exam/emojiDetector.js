function emojiDetector(input) {
    let digitPattern = /\d/g;
    let emojiPattern = /(::|\*\*)([A-Z][a-z]{2,})(\1)/g;
    let emojies = input[0].match(emojiPattern);
    let digits = input[0].match(digitPattern).map(Number);
    let coolThreshold = digits.reduce((a, b) => { return a * b });
    let coolnessEmojie = [];
    for (let emoji of emojies) {
        let currentEmojie = emoji;
        emoji = emoji.substring(2, emoji.length - 2);
        let coolSum = 0;
        for (const ch of emoji) {
            let code = ch.charCodeAt(0);
            coolSum += Number(code);
        }
        if (coolSum > coolThreshold) {
            coolnessEmojie.push(currentEmojie);
        }
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(
      `${emojies.length} emojis found in the text. The cool ones are:`
    );
    if (coolnessEmojie.length > 0) {
        coolnessEmojie.forEach((element) => console.log(element));
    }
    
}
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
emojiDetector([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);
emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);
