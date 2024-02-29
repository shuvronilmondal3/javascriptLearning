let number = Math.random()*100;
let num1 = prompt("Enter first number ");
let exp = prompt("Enter the oparation ~ ");
let num2 = prompt("Enter the sceond number ");
if(number>10)
{
    let sum = num1 +num2;
    let sub = num1-num2;
    let mul = num1 * num2;
    let div = num1 /num2;
    switch(exp)
    {
        case '+':
            console.log("Sum == "+sum);
            break;
        case '-':
            console.log("Subtraction ==="+sub);
            break
        case '*':
            console.log("Multiplication =="+mul);
            break;
        case '/':
            console.log("Divition == "+div);
    }
}
else
{
    let sum = num1 - num2;
    let sub = num1/num2;
    let mul = num1 + num2;
    let div = num1 *num2;
    switch(exp)
    {
        case '+':
            console.log("Sum == "+sum);
            break;
        case '-':
            console.log("Subtraction ==="+sub);
            break
        case '*':
            console.log("Multiplication =="+mul);
            break;
        case '/':
            console.log("Divition == "+div);
    }
}