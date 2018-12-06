'use strict'; 

let table = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];


let willBeFilledBelow;
function fillUp () {
  let filler = new Array(table.length).fill(0);
  willBeFilledBelow = filler;
  return filler;
}

fillUp();

let verticalAdd = [0,0,0];
let shifted = [[0,0,0],[0,0,0],[0,0,0]];

function callMe () {
  for (let o = 0; o <= table.length-1; o ++){
    for (let u = 0; u < table[o].length; u ++){
      let value = table[o][u];
      willBeFilledBelow[o] += value;
      verticalAdd[u] += value;
      shifted[u][o] += value;
    }
  }
  
}

callMe();
