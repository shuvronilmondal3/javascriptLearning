// let ranDom = Math.random()*100;
// console.log(ranDom)
//  if(ranDom<20){
// //     document.body.style.backgroundColor = "black"
// // document.body.style.color = "white"
// document.querySelectorAll(".box").forEach(e=>
//     {
//         e.style.backgroundColor = "red";
//     })
// // let box = document.getElementsByClassName("box");
// // box[0].style.backgroundColor = "white";
// // box[0].style.color = "black";
// // box[1].style.backgroundColor = "pink";
// // box[2].style.backgroundColor = "blue";
// }
// else if(ranDom>=20 && ranDom<40){
//     // document.body.style.backgroundColor = "pink"
//     // document.body.style.color = "green"
//     document.querySelectorAll(".box").forEach(e=>
//         {
//             e.style.backgroundColor = "blue";
//         })
// }
// else if(ranDom>=40 && ranDom<50) {
//     document.querySelectorAll(".box").forEach(e=>
//         {
//             e.style.backgroundColor = "yellow";
//         })
// }
// else if(ranDom>=50 && ranDom<60) {
//     document.querySelectorAll(".box").forEach(e=>
//         {
//             e.style.backgroundColor = "pink";
//         })
// }
// else if(ranDom>=60 && ranDom<70) {
//     document.querySelectorAll(".box").forEach(e=>
//         {
//             e.style.backgroundColor = "black";
//             e.style.color = "white";
//         })
// }
// else if(ranDom>=70 && ranDom<80) {
//     document.querySelectorAll(".box").forEach(e=>
//         {
//             e.style.backgroundColor = "purple";
        
//         })
// }
// else if(ranDom>=80 && ranDom<90) {
//     document.querySelectorAll(".box").forEach(e=>
//         {
//             e.style.backgroundColor = "cornflowerblue";
        
//         })
// }
// else{
//     // document.body.style.backgroundColor = "purple"
//     // document.body.style.color = "blue"
//     document.querySelectorAll(".box").forEach(e=>
//         {
//             e.style.backgroundColor = "green";
//         })
// }
// document.body.style.backgroundColor = "rgb(255,3,255)"
//to genarate random btw a and b == a + r*(b-a)
let boxes = document.querySelector(".container").children;
function getRandomColor(){
    let colour1 =Math.ceil( 0 + Math.random()*255);
    let colour2 =Math.ceil( 0 + Math.random()*255);
    let colour3 = Math.ceil( 0 + Math.random()*255);
    return "rgb("+colour1+","+colour2+","+colour3+")"

}
let rand = getRandomColor();
Array.from(boxes).forEach(e=>
    {
      e.style.backgroundColor =getRandomColor();
     e.style.color = getRandomColor()
     console.log(getRandomColor());
    })

    // document.querySelectorAll(".box").forEach(e=>
    //            {
    //                 e.style.backgroundColor = ;
    //     })