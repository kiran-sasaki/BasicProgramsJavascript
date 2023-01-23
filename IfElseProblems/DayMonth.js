const prompt = require("prompt-sync")({sigint:true}); 
const date = prompt('Enter Date:');
const month = prompt('Enter Month:');
if(month<=6 && date <= 20)
{
    console.log("month"+month+"  "+"date"+date+" true");
}
else if(month >=3 && month <6 && (date<31))
{
    console.log("date"+date+" "+"month"+month+" true")
}
else
{
    console.log("false");
}