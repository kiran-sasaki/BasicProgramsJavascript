const prompt = require("prompt-sync")({sigint:true}); 
const number = prompt('Enter option:');
console.log("1. Feet to Inch 2. Feet to Meter 3. Inch to Feet 4. Meter to Feet")
let option=1;
switch(option)
{
    case 1:
        const prompt = require("prompt-sync")({sigint:true}); 
        const feet = prompt('Enter the feet length:');
        let inch=12*feet;
        console.log("Inch= "+inch);
    break;
    case 2:
        const prompt1 = require("prompt-sync")({sigint:true}); 
        const feet1 = prompt('Enter the feet length:');
        let metre=0.0305*feet1;
        console.log("metre= "+metre)
    break;
    case 3:
        const prompt2 = require("prompt-sync")({sigint:true}); 
        const inches = prompt('Enter the inch length:');
        let feet3=0.0833*inches;
        console.log("feet= "+feet3)
    break;
    case 4:
        const prompt3 = require("prompt-sync")({sigint:true}); 
        const meter = prompt('Enter the metre length:');
        let feet4=3.281*meter;
        console.log("feet= "+feet4);
    break;
}