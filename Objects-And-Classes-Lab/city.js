function city(obj) {
  for (let [key, prop] of Object.entries(obj)) {
    console.log(`${key} -> ${prop}`);
  }
}
obj = {
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
};
