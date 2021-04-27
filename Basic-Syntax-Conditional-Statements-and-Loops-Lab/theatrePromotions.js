function theatrePromotions(day, age) {
  const typeOfDay = day;
  const agePerson = age;
  switch (typeOfDay) {
    case "Weekday":
        if (agePerson >= 0 && agePerson <= 18) {
            console.log(`12$`);
        }
        else if (agePerson > 18 && agePerson <=64) {
            console.log(`18$`);
        }
        else if (agePerson > 64 && agePerson <= 122) {
            console.log(`12$`);
        }
        else {
            console.log(`Error!`);
        }
      break;
    case "Weekend":
        if (agePerson >= 0 && agePerson <= 18) {
            console.log(`15$`);
        }
        else if (agePerson > 18 && agePerson <=64) {
            console.log(`20$`);
        }
        else if (agePerson > 64 && agePerson <= 122) {
            console.log(`15$`);
        }
        else {
            console.log(`Error!`);
        }
      break;
    case "Holiday":
        if (agePerson >= 0 && agePerson <= 18) {
            console.log(`5$`);
        }
        else if (agePerson > 18 && agePerson <=64) {
            console.log(`12$`);
        }
        else if (agePerson > 64 && agePerson <= 122) {
            console.log(`10$`);
        }
        else {
            console.log(`Error!`);
        }
      break;
    default:
      break;
  }
}
theatrePromotions("Weekday", 42);
theatrePromotions("Holiday", -12);
theatrePromotions("Holiday", 15);
