const readline = require("readline-sync");
function Palindrome()
{
    let r,sum=0,temp;    
    let n=4543524;//It is the number variable to be checked for palindrome  
    
    temp=n;    
    while(n>0){    
     r=n%10;  //getting remainder  
     sum=(sum*10)+r;     
     n=n/10;    
    }    
    if(temp==sum)    
     console.log("palindrome number ");    
    else    
     console.log("not palindrome");    
}
Palindrome();

const readline = require("readline-sync");
function PrimeNumber(num) {
    let i, cnt = 0;
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            cnt++;
        }
    }
    if (cnt == 2) {
        console.log("is a prime number");
    } else {
        console.log("is not prime number");
    }
}
console.log("Enter number to check number is prime or not");
let num = Number(readline.question());
PrimeNumber(num);