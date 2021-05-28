function convertMetersToKilometres(number) {
    //1 km = 1000 meters
    let distance = number / 1000;
    console.log(`${distance.toFixed(2)}`);
}
convertMetersToKilometres(1852);
convertMetersToKilometres(798);