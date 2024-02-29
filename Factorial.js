/*let fact = 1;
let num = 5;
for(let i=num;i>=1;i--)
{
    fact = i*fact;
}
console.log("Factorial of the number is ",fact);*/
let a =5;

function Factorial(num)
{
    let arr = Array.from(Array(num+1).keys());
    // console.log(arr.slice(1));
    let fact = (a,b)=>{
        return a*b;
    }
    console.log(arr.slice(1).reduce(fact));
}
Factorial(a);