const prompt = require("prompt-sync")({sigint:true}); 
const number = prompt('Enter number:');
switch(number)
{
    case "1":
        console.log("UNIT");
    break;
    case "10":
        console.log("TEN");
    break;
    case "100":
        console.log("HUNDREDS");
    break;
    case "1000":
        console.log("THOUSAND");
    break;
}