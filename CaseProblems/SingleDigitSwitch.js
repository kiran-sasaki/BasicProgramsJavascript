const prompt = require("prompt-sync")({sigint:true}); 
const number = prompt('Enter number:');
let NumName;

switch(number)
{
    case "1":
        NumName="ONE";
        break;
    case "2":
        NumName="TWO";
        break;
    case "3":
        NumName="THREE";
        break;
    case "4":
        NumName="FOUR";
        break;
    case "5":
        NumName="FIVE";
        break;
    case "6":
        NumName="SIX";
        break;
    case "7":
        NumName="SEVEN";
        break;
    case "8":
        NumName="EIGHT";
        break;
    case "9":
       NumName="NINE";
        break;
    default:
        NumName="INVALID"


}
console.log(NumName);