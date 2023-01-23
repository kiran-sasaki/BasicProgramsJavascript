const prompt = require("prompt-sync")({sigint:true}); 
const number = prompt('Enter number:');
if(number==1)
{
    console.log("UNIT");
}
if(number==10)
{
    console.log("TEN");
}
if(number==100)
{
    console.log("HUNDREDS");
}
if(number==1000)
{
    console.log("THOUSAND");
}