let score = "89"
console.log(typeof score);//both are same
console.log(typeof(score));
let valueScore = Number(score);
console.log(typeof(valueScore));
console.log(valueScore);//if the string has rather than numerical value then after type conversion it will return NaN=>not a number
console.log(score);
let st = "";
let boolSt = Boolean(st);
console.log(boolSt);// false 
// let st1 = " ";
// let st1 = null
let st1 = undefined
let boolSt1 = Boolean(st1);
console.log(boolSt1);// true
// boolean to Number 
let bool1 = true
let num1 = Number(bool1)
console.log(num1);//true -> 1 && false -> 0


