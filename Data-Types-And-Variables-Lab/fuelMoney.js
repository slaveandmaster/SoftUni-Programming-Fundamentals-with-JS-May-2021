function fuelMoney(distance,passenger, fuelPrice) {
  //     •	Calculate the fuel by knowing that an empty bus can pass 100 km with 7L diesel.
  // •	One person in that bus excluding the driver increases fuel consumption by 100 milliliters.
  // •	The money is calculated by multiplying the fuel price with the needed fuel for the trip.
  let dist = distance;
  let passengers = passenger;
  let priceFuel = fuelPrice;
  let money = 0;
  let neededFuel = (dist / 100) * 7;
  neededFuel += passengers * 0.100;
  money = neededFuel * priceFuel;
  console.log(`Needed money for that trip is ${money} lv`)
}
fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);
