function solve(text) {
    let half = text.length / 2;
    let word = text.slice(0,half).split('').reverse().join('');
    let secondWord = text.slice(half).split('').reverse().join('');
    console.log(word);
    console.log(secondWord);
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');