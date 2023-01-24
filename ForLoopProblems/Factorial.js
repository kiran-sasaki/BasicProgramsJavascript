const readline = require("readline-sync");
console.log("Enter the Number");
let number = Number(readline.question());;let fact=1;
for(i=1;i<=number;i++){      
    fact=fact*i;      
   }      

console.log("factorial of "+number+ "is:"+fact);