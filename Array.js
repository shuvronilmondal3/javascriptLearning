/*let arr = [1,2,3,4,5,6];
arr[0]=69;
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
console.log(arr.join("+"));
// console.log(arr.pop())
arr.push(68);
console.log(arr);*/
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];
//a1.concat(a2);concat function return a new array it's does not change the existing array 
let newa = a1.concat(a3,a2);
console.log(newa);
console.log("After sorting ",newa.sort());
// let newarr = [];
// for(let i=0;i<a1.length;i++)
// {
//     const ele = a1[i];
//     newarr.push(ele**2);
// }
// console.log(newarr);
let newArr = a1.map((e)=>{

    return e**2;
})

console.log(newArr)
let a9 = [1,2,3,4,6];
const greaterThanthree = (element)=>{
   if(element>3)
   {
       return true;
   }
   return false;
}
console.log(a9.filter(greaterThanthree));
let a5 = [1,2,3,4,5];
let sum = (a,b)=>{
    return a+b;
}
console.log(a5.reduce(sum));