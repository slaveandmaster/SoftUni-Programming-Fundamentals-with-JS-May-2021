function vacation(countPeople, group, dayOfWeek) {
  let peoples = Number(countPeople);
  let typeGroup = group;
  let day = dayOfWeek;
  let money = 0;
  switch (typeGroup) {
    case "Students":
      if (day === "Friday") {
        money = 8.45;
      } else if (day === "Saturday") {
        money = 9.8;
      } else if (day === "Sunday") {
        money = 10.46;
      }
      break;
    case "Business":
      if (day === "Friday") {
        money = 10.9;
      } else if (day === "Saturday") {
        money = 15.6;
      } else if (day === "Sunday") {
        money = 16;
      }
      break;
    case "Regular":
      if (day === "Friday") {
        money = 15;
      } else if (day === "Saturday") {
        money = 20;
      } else if (day === "Sunday") {
        money = 22.5;
      }
      break;
    default:
      break;
  }
  let calcMoney = peoples * money;
  if (peoples >= 30 && typeGroup === "Students") {
    calcMoney = calcMoney * 0.85;
  } else if (peoples >= 100 && typeGroup === "Business") {
    let discount = 10 * money;
    calcMoney = calcMoney - discount;
  } else if (peoples >= 10 && peoples <= 20 && typeGroup === "Regular") {
    calcMoney = calcMoney * 0.95;
  }
  console.log(`Total price: ${calcMoney.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
