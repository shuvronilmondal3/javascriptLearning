// Objects Are two types - singletone Object letral
const jsUser={
        name:"Jitu",
        email:"shuvronilmondal53@gmail.com",
        city:"Kolkata",
        phNo: 85970118234
}
//accessing the objects keys 
// console.log(jsUser.name);
// console.log(jsUser["name"]);

// using constractor - singletone object 
const viewer = new Object()
viewer.name = "KKK"
viewer.id = 1234
// console.log(viewer)

// merge object 
const ob1 = {1:"a",2:"b"}
const ob2 = {3:"c",4:"d"}
const ob3 = {5:"e",6:"f"}
console.log(ob1);
const newOb = {...ob1,...ob2,...ob3}
console.log(newOb);

