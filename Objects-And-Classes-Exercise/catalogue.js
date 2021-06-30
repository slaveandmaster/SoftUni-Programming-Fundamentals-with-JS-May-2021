function catalogue(products) {
  let catalog = {};
  for (let index = 0; index < products.length; index++) {
    let [product, price] = products[index].split(" : ");
    let firstChar = product.charAt(0);
    catalog[firstChar] = [];
  }
//   let dictionary = products.reduce((acc, current) => {
//     const letter = current.charAt(0);
//     acc[letter] = [];  
//     return acc
//   },{})
//   console.log(dictionary);
  products.forEach(element => {
      const firstChar = element.charAt(0);
      let reformatStr = element.split(' : ').join(': ');
      catalog[firstChar].push(reformatStr);
  });  
  let sortedCatalog = Object.entries(catalog).sort((a,b) => a[0].localeCompare(b[0]));
  sortedCatalog.forEach((el) => {
      console.log(`${el[0]}`);
      el[1].sort((a,b) => a.localeCompare(b)).forEach((x) => console.log(`  ${x}  `));
  })
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
