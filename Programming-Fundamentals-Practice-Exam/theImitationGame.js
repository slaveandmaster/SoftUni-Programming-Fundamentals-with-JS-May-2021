function theImitationGame(input) {
    let message = input.shift();
    let actions = {
        Move,
        Insert,
        ChangeAll
    }
    //iterate throug array
    while (input[0] != "Decode") {
        let tokens = input.shift();
        let [command , ...params] = tokens.split("|");
        actions[command](params);
    }
    //output
    console.log(`The decrypted message is: ${message}`);
    //all functions
    function Move(numberOfLetters) {
        let position = Number(numberOfLetters);
        let letters = message.substring(0,position);
        let other = message.substring(position,);
        message = other + letters;
       // console.log(`${message}`);

        
    }
    function Insert([index, value]) {
        let msg = message.split('');
        msg.splice(Number(index),0,value);
        message = msg.join('');
    }
    function ChangeAll([oldString, newString]) {
        let match = message.indexOf(oldString);
        while (match > -1) {
            message = message.replace(oldString, newString);
            match = message.indexOf(oldString);
        }
    }
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  )
  theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  )