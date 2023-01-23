const prompt = require("prompt-sync")({sigint:true}); 
var day = prompt('Enter day:');
console.log(day);
var dayName;

switch (day) 
{
  case "1":
    dayName = "Sunday";
    console.log(dayName);
    break;
  case "2":
    dayName = "Monday";
    console.log(dayName);
    break;
  case "3":
    dayName = 'Tuesday';
    console.log(dayName);
    break;
  case "4":
    dayName = 'Wednesday';
    console.log(dayName);
    break;
  case "5":
    dayName = 'Thursday';
    console.log(dayName);
    break;
  case "6":
    dayName = 'Friday';
    console.log(dayName);
    break;
  case "7":
    dayName = "Saturday";
    console.log(dayName);
    break;
  default:
    dayName = 'Invalid day';
    console.log(dayName);
}