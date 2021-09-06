function garage(input) {
  let garages = new Map();
  for (const line of input) {
    let [garage, carDetails] = line.split(" - ");
    if (!garages.has(garage)) {
      garages.set(garage, [carDetails]);
    } else {
      let currentCars = garages.get(garage);
      currentCars.push(carDetails);
      garages.set(garage, currentCars);
    }
  }
  let sortedGarages = [...garages.entries()].sort((a, b) => a[0] - b[0]);
  for (const [item, carProperty] of sortedGarages) {
    console.log(`Garage № ${item}`);
    carProperty.forEach((x) => {
      console.log(`--- ${x.replace(/\: /g, " - ")}`);
    });
  }
  
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
