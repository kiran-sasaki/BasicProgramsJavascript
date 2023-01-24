let num1=( Math.floor(Math.random() *100))+10;
let num2=( Math.floor(Math.random() *100))+10;
let num3=( Math.floor(Math.random() * 100))+10;
let num4=( Math.floor(Math.random() * 100))+10;
let num5=( Math.floor(Math.random() * 100))+10;
console.log("num1 ="+num1);
console.log("num2 ="+num2);
console.log("num3 ="+num3);
console.log("num4 ="+num4);
console.log("num5 ="+num5);
if((num1>num2)&&(num1>num3)&&(num1>num4)&&(num1>num5))
{
    console.log("the maximum no is "+num1);
}
else if((num2>num1)&&(num2>num3)&&(num2>num4)&&(num2>num5))
{
    console.log("the maximum no is "+num2);
}
else if((num3>num1)&&(num3>num1)&&(num3>num4)&&(num3>num5))
{
    console.log("the maximum no is "+num3);
}
else if((num4>num2)&&(num4>num3)&&(num4>num1)&&(num4>num5))
{
    console.log("the maximum no is "+num4);
}
else
{
    console.log("the maximum no is "+num5);
}