function jitu(num1) {
    if(num1>10)
        console.log(">10");
    else
        console.log("<10");
}
//Arrow Function in JS
const func1 = (n)=>{
    console.log("Hi i am a arrow functon ",n);
}
func1(1);

const func2 = (n)=>{
    let sum = n+9;
    return sum;
}

 let sum = func2(3);
 console.log(sum);
