function buildAWall(arr) {
  let floors = arr.map(Number);
  let dayConcrete = [];
  let totalCost = 0;
  //брой стройтелни екипи
  let totalCrew = floors.filter((el) => el < 30).length;
  //изпълняваме while цикъл докато имаме работни екипи
  while (totalCrew !== 0) {
    //дневно количесто бетон
    let byDayConcrete = 0;
    //въртим цикъл за строене на етажите
    for (let index = 0; index < floors.length; index++) {
      //ако даден екип не е достигнал максималната височина нарастваме с един етажите и добавяме количеството бетон за деня
      if (floors[index] !== 30) {
        floors[index]++;
        byDayConcrete += 195;
        //проверява ме дали някои от екипите е достигнал максимална височина и ако да намаляме общия брой на екипите
        if (floors[index] == 30) {
          totalCrew--;
        }
      }
    }
    //добавяме количеството бетон за деня;
    dayConcrete.push(byDayConcrete);
  }
  //общо количесто бетон
  let totalConcrete = dayConcrete.reduce((acc, current) => {
    return acc + current;
  }, 0);
  //крайна цена за цялото количество бетон
  totalCost = totalConcrete * 1900;
  console.log(dayConcrete.join(","));
  console.log(`${totalCost} pesos`);
}
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);
