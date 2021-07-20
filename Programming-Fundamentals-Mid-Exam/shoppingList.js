function shoppingList(input) {
  //get array of groceries
  let groceries = input.shift().split("!");
  //while command is different from Go Shoping! execute commands...
  let line;
  while ((line = input.shift()) != "Go Shopping!") {
    let [command, product, newProduct ] = line.split(" ");

    switch (command) {
      case "Urgent":
            Urgent(groceries, product);
        break;
      case "Unnecessary":
          Unnecessary(groceries, product);
        break;
      case "Correct":
          Correct(groceries, product, newProduct)
        break;
      case "Rearrange":
          Rearrange(groceries, product);
        break;
      default:
        break;
    }
  }
  //create commands urgent , unnecessery, correct, rearrange
  // add item at the start of the list . If already exist skip
  function Urgent(shopList, item) {
    if (!shopList.includes(item)) {
      shopList.unshift(item);
    }
  }
  // remove item with the given name ,only if exist in the list.Otherwise skip this command
  function Unnecessary(shopList, item) {
    if (shopList.includes(item)) {
      let idx = shopList.indexOf(item);
      shopList.splice(idx, 1);
    }
  }
  // if the item with the given name exists in the list chane name with the new one
  function Correct(shopList, item, newItem) {
    if (shopList.includes(item)) {
      let idx = shopList.indexOf(item);
      shopList[idx] = newItem;
    }
  }
  // if the item exist in the list ,remove it from current position and add it to the end of list
  function Rearrange(shopList, item) {
    if (shopList.includes(item)) {
      let idx = shopList.indexOf(item);
      shopList.push(shopList.splice(idx, 1));
    }
  }
  //output list separate with ,
  console.log(groceries.join(", "));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
