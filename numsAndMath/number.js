let num1 = 100
console.log(num1);
let num2 = new Number(90)
console.log(num2);// now we have to find the all method in number so i have to go to the web browser console
console.log(num2.toFixed(2))//->90.00
let f = 23.894
console.log(f.toPrecision(1))//-> 2 => 24 , 3 => 23.9 , 4=> 23.89 , 5 => 23.894 , 1=>? 
// toLocalStrig Method -> 
const rs = 1000000
console.log(rs.toLocaleString())//-> american style a comma lagabe 
// console.log(rs.toLocaleString('en-IN'))