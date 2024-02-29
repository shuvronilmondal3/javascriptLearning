// premitive dataType = Number,String,Boolean,null,undefine,Symbol,Bigint
// Non Premitive dataType = Array, Object,Function
var x = 10;
console.log("This is a new datatype ", x);
var x = 55;
console.log("This is a new datatype ", x);
// This is allowed in js but
let y = 90;
console.log("Y is ", y);
y = 99;
console.log("Now y is ", y); //now y will be changed in 99
// you can not redeclare y again
const z = 3;
console.log("Value of z is ", z);
// z = 38; you can't change the constant value
console.log("Is the value of z is changed ", z);
console.table([x, y, z]);
console.log("type of null is ",typeof(null));
let Jitu=9;
console.log("Type of jitu is ",typeof(Jitu));
// data type in js ;
/*
        PRIMITIVE DATA TYPE
        number -> not int this is a  number 
        bigint
        string
        boolen
        null -> TYPE OF NULL is object 
       undefine -> type is undefine
        symbol=>uniqueness
*/
/* */

let a = [1,2,3,4]
// console.log(typeof a)
 // lets create a object 
 let num = 90
 let myobj = {
        name : "Jitu",
        age : 21,
        collage:"Techno",
        // mother:"gita",
        number:num
 }
 console.log(myobj)
