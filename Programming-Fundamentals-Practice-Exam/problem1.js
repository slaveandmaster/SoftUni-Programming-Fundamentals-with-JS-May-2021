function solve(input) {
    let msgString = input.shift();
      let actions = {
          Letters,
          Reverse,
          Substring,
          Replace,
          IsValid
      };
      let line = input.shift()
      while (line != "Registration") {
          let tokens = line.split(" ");
          let [ command, ...params ] = tokens;
          actions[command](params);
          line = input.shift();
      }
   
      function Letters(mYletterCase) {
          let letterCase = mYletterCase[0];
          if (letterCase == "Upper") {
              msgString = msgString.toUpperCase();
              console.log(msgString);
          }
          else if(letterCase == "Lower"){
              msgString = msgString.toLowerCase();
              console.log(msgString);
          }
          
      }
      function Reverse([startIndex, endIndex]) {
          if (Number(startIndex) >= 0 && Number(endIndex) < msgString.length) {
              let firstPart = msgString.substring(0,Number(startIndex));
              let result = msgString.substring(Number(startIndex), Number(endIndex) + 1);
              let lastPart = msgString.substring(Number(endIndex));
              console.log(result.split('').reverse().join(''));
              
          }
      }
      function Substring(searchString) {
          let str = searchString[0];
          //.log(tstr);
          let isContain = msgString.indexOf(str);
          if (isContain > -1) {
              let idx = Number(isContain);
              let firstPart = msgString.substring(0, idx);
              let cutPlace = msgString.substring(idx, idx + str.length);
              let lastPart = msgString.substring(idx + str.length);
              msgString = firstPart + lastPart;
              console.log(msgString);
          }
          else {
              console.log(`The username ${msgString} doesn't contain ${str}.`)
          }
      }
      function Replace(searchLetter) {
          let letter = searchLetter[0];
          let match = msgString.indexOf(letter);
          while (match > -1) {
             msgString = msgString.replace(letter,'-');
              match = msgString.indexOf(letter);
          }
          console.log(msgString);
      }
      function IsValid(searchLetter) {
          let letter = searchLetter[0];
          let match = msgString.indexOf(letter);
          if (match > -1) {
              console.log(`Valid username.`);
          }
          else {
           console.log(`${letter} must be contained in your username.`);
          }
      }
   }
   solve(["John",
   "Letters Lower",
   "Substring SA",
   "IsValid @",
   "Registration"])
   solve(["ThisIsSoftUni",
   "Reverse 1 3",
   "Replace S",
   "Substring hi",
   "Registration"])
   