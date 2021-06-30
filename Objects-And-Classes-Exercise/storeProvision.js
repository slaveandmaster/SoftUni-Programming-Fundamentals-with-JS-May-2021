function storeProvision(stockInStore, productsOrders) {
  // Every even index will hold the name of the product and on every odd index will hold the quantity of that product.
  // second array could contain products that are already in the local store.
  //  If that happens increase the quantity for the given product .
  // You should store them into an object, and print them in the following format: (product -> quantity)
  let obj = {};
  stockInStore.forEach((element, index) => {
    if (index % 2 === 0) {
      obj[stockInStore[index]] = Number(stockInStore[index + 1]);
    }
  });
  productsOrders.forEach((element,index) => {
      if (index % 2 === 0) {
          if (obj.hasOwnProperty(productsOrders[index])) {
              obj[productsOrders[index]] += Number(productsOrders[index + 1]);
          }
          else {
              obj[productsOrders[index]] = Number(productsOrders[index + 1]);
          }
          
      }
  })
  for (const [item , quantity ] of Object.entries(obj)) {
      console.log(`${item} -> ${quantity}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
