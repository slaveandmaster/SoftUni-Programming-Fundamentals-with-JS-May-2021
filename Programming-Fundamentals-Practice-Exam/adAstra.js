function adAstra(text) {
  let pattern =
    /([#|])(?<name>[A-Za-z\s]+)(\1)(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})(\1)(?<callories>\d{1,5})(\1)/g;
  let match = pattern.exec(text);
  let validFood = [];
  while (match != null) {
      validFood.push(match.groups);
      match = pattern.exec(text);
  }
  let totalCallories = 0;
  for (let index = 0; index < validFood.length; index++) {
      totalCallories += Number(validFood[index].callories);
      
  }
  let days = Math.floor(totalCallories / 2000);
  console.log(`You have food to last you for: ${days} days!`)
  for (const item of validFood) {
      console.log(`Item: ${item.name}, Best before: ${item.date}, Nutrition: ${item.callories}`)
  }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
