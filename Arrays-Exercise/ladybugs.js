function ladybugs(input) {
    let n = Number(input.shift());
    let initialIndex = input.shift();
    //попълваме нов празен масив с 0
    let board = new Array(n).fill(0);
    //console.log(board)
    //обхождаме новия масив и добавяме калинки спрямо стартовите индекси
    for (let index = 0; index < board.length; index++) {
      let idx = initialIndex.split(" ");
      for (let j = 0; j < idx.length; j++) {
        if(idx[j] < 0 || idx[j] >=n) {
          continue;
        }
        board[idx[j]] = 1;
      }
    }
    // console.log(board);
    let line;
    //обработваме останалата част от входящите данни -> движението по дъската
    while ((line = input.shift())) {
      let tokens = line.split(" ");
      let [startIdx, direction, jumpIndex] = tokens;
      startIdx = Number(startIdx);
      //проверка дали индексите сa в обхвата на дъската и дали има калинка на дадена позиция
      if (board[startIdx] !== 1 || startIdx >= board.length || startIdx < 0) {
        continue;
      }
      //освобождаваме позицията на калинката като зададем стойност 0-ла
      board[startIdx] = 0;
      //с какъв скок ще се придвижим и в каква посока
      let jump = Number(jumpIndex);
      //ако посоката е на ляво обръща ме знака
      if (direction == "left") {
        jump = -jump;
      }
      //следваща позиция
      startIdx += jump;
      //въртим цикъл докато не намерим празно място или не излезем от дъската
      while (startIdx >= 0 && startIdx < board.length) {
        if (board[startIdx] === 0) {
          board[startIdx] = 1;
          break;
        }
        startIdx += jump;
      }
    }
    console.log(board.join(' '));
  }
  
  ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
  //ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
 // ladybugs([5, "3", "3 left 2", "1 left -2"]);