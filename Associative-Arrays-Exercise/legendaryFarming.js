function legendaryFarming(input) {
  let keyMaterials = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };
  let junk = {};

  //сплитване на входните данни по интервал
  let materials = input.split(" ");
  //обхождане на данните и попълване на двата масива
  for (let index = 0; index < materials.length; index += 2) {
    let material = materials[index + 1].toLowerCase();
    if (
      material === "shards" ||
      material === "motes" ||
      material === "fragments"
    ) {
      keyMaterials[material] += Number(materials[index]);
      //проверка след добавяне на количеството материали дали е достигнато до 250, ако да спираме цикъла
      if (keyMaterials[material] >= 250) {
        switch (material) {
          case "shards":
            console.log(`Shadowmourne obtained!`);
            break;
          case "motes":
            console.log(`Dragonwrath obtained!`);
            break;
          case "fragments":
            console.log(`Valanyr obtained!`);
            break;
          default:
            break;
        }
        keyMaterials[material] -= 250;
        break;
      }
    } else {
      if (!junk.hasOwnProperty(material)) {
        junk[material] = Number(materials[index]);
      } else {
        let currentQty = junk[material];
        junk[material] = currentQty + Number(materials[index]);
      }
    }
  }
  //отпечатване на победителя и останалите материали
  let sortedMaterials = Object.entries(keyMaterials)
    .sort((a, b) => {
      return b[1] - a[1] || a[0].localeCompare(b[0]);
    })
    .forEach((x) => {
      console.log(`${x[0]}: ${x[1]}`);
    });
  let sortedJunks = Object.entries(junk)
    .sort((a, b) => {
      return a[0].localeCompare(b[0]);
    })
    .forEach((x) => {
      console.log(`${x[0]}: ${x[1]}`);
    });
}
legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
