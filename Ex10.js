let rand1 = Math.random();
let rand2 = Math.random();
let rand3 = Math.random();
let first,sceond,third;
if(rand1<0.33)
{
    first ="Crazy";
}
else if(rand1>0.33 && rand1 <0.66)
{
    first = "Amazing";
}
else
{
    first = "Fire";
}
if(rand2<0.33)
{
    sceond ="Engine";
}
else if(rand2>0.33 && rand2 <0.66)
{
    sceond = "Foods";
}
else
{
sceond = "Garment";
}
if(rand3<0.33)
{
    third ="Hub";
}
else if(rand3>0.33 && rand3 <0.66)
{
    third = "limited";
}
else
{
    third = "Bros";
}
console.log("Your bussiness name is ~",first+sceond+third);