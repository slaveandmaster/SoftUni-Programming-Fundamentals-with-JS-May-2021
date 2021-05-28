function reversedChars(charOne, charTwo, charThree) {
    let letters = charOne+charTwo+charThree;
    console.log(letters.split('').reverse().join(' '));
}
reversedChars("A", "B", "C");
reversedChars("1", "L", "&");
