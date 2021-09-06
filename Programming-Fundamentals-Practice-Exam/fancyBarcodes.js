function fancyBarcode(input) {
  let pattern = /^(@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)$/;
  ///^(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@#+)$/;
  let n = Number(input.shift());
  for (let index = 0; index < n; index++) {
    let matcher = pattern.exec(input[index]);
    if (matcher == null) {
      console.log(`Invalid barcode`);
    } else {
      let digitPattern = /\d/g;
      let barcode = input[index];
      let numbersBarcode = barcode.match(digitPattern);
      if (numbersBarcode != null) {
        let result = numbersBarcode.reduce((acc, current) => acc + current, "");
        console.log(`Product group: ${result}`);
      } else {
        result = "00";
        console.log(`Product group: ${result}`);
      }
    }
  }
}
fancyBarcode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
fancyBarcode([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
