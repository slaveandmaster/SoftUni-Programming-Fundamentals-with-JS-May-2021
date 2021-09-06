function solve(input) {
  let pattern = /^(.*)>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<(.*)$/;
  //   let pattern =
  //     /^(.*)>(?<digits>\d{3})\|(?<small>[a-z]{3})\|(?<big>[A-Z]{3})\|(?<symbols>[^<>]{3})<(.*)$/;
  //broi zapisi
  let line = input.shift();
  //obhojdane na vseki red i proverka dali e validen zapisa
  input.forEach((input) => {
    let isValid = input.match(pattern);
    //ako regex-a ne e validen izvejdame saobshtenie za greshka
    if (!isValid || isValid[1] != isValid[6]) {
      console.log(`Try another password!`);
      return;
    }
    //v protiven sluchai konkatanirame stringovete za da poluchim rezultata
    let pass = `${isValid[2]}${isValid[3]}${isValid[4]}${isValid[5]}`;
    console.log(`Password: ${pass}`);
  });
  //   for (let index = 0; index < line; index++) {
  //     const element = input[index];
  //     let match = pattern.exec(element);
  //     if (match == null) {
  //       console.log(`Try another password`);
  //     } else {
  //       let pass = `${match.groups.digits}${match.groups.small}${match.groups.big}${match.groups.symbols}`;
  //       console.log(`Password: ${pass}`);
  //     }
  //   }
}
solve([
  "3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$",
]);
