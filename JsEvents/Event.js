let btn = document.getElementById("btn");
btn.addEventListener('click',()=>{
    alert("I Am Clicked By Jitu");
    document.querySelector(".box").innerHTML="You clicked the button";
})
btn.addEventListener('click',()=>{
    alert("I am a button and clicked by you ");
})