function thePyramidOfKingDjoser(base, inc) {
    let pBase = Number(base);
    let increment = Number(inc);
    let stones = 0;
    let marbles = 0;
    let counter = 1;
    let lazuli = 0;
    let gold = 0;
   
    for (let index = pBase; index >= 1; index-=2) {
        let total = index * index * increment;
        let innerbox = ((index - 2) * (index - 2)) * increment;
        let outerbox = total - innerbox;
        //console.log(index);
        if (index <= 2) {
            //gold = 1;
            gold = index * index * increment;
            break;
        }
        if (counter % 5 === 0) {
            lazuli += outerbox;
            stones += innerbox;
        }
        else {

            stones += (index - 2) * (index - 2) * increment;
            marbles += outerbox;
            
        }
        counter++;
        
    }
    //gold = index * index * increment;
    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marbles)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(counter*increment)}`);
}
thePyramidOfKingDjoser(11,1);
thePyramidOfKingDjoser(11,0.75);
thePyramidOfKingDjoser(12,1);
thePyramidOfKingDjoser(23,0.5);