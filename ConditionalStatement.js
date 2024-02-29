// let number = prompt("Enter a NUmber :");
// if(number%5==0)
// {
//     console.log("This Number is divided by 5");
// }
// else
//     console.log("This NUmber is not divided by 5");
// Sort three number 
let num1 = prompt("Enter first number :");
let num2 = prompt("Enter Sceond number :");
let num3 = prompt("Enter Third number :");

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(num1 + "," + num2 + "," + num3);
    }
    else {
        console.log(num1 + "," + num3 + "," + num2);
    }
}
else if(num2>num1 && num2 > num3){
    if (num1 > num3) {
        console.log(num2 + "," + num1 + "," + num3);
    }
    else {
        console.log(num2 + "," + num3 + "," + num1);
    }
}
else{
    if (num1 > num2) {
        console.log(num3 + "," + num1 + "," + num2);
    }
    else {
        console.log(num3 + "," + num2 + "," + num1);
    }
}
