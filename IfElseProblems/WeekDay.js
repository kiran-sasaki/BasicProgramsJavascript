const prompt = require("prompt-sync")({sigint:true}); 
const number = prompt('Enter number:');
if(number==1)
{
    console.log("MONDAY");
}
if(number==2)
{
    console.log("TUESDAY");
}
if(number==3)
{
    console.log("WEDNESDAY");
}
if(number==4)
{
    console.log("THURSDAY");
}
if(number==5)
{
    console.log("FRIDAY");
}
if(number==6)
{
    console.log("SATURDAY");
}
if(number==7)
{
    console.log("SUNDAY");
}