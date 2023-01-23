const prompt = require("prompt-sync")({sigint:true}); 
let a = prompt('Enter number:');
let b = prompt('Enter number:');
let c = prompt('Enter number:');
Result1 = a + b * c;
console.log(Result1);
let Result2 = c + a / b;
console.log(Result2);
let Result3 = a % b + c;
console.log(Result3);
let Result4 = a * b + c;
console.log(Result4);
if((Result1>Result2) && (Result1>Result3) && (Result1>Result4))
{
    console.log("Maximum Value is"+Result1);
}
else if((Result2>Result1) && (Result2>Result3) && (Result2>Result4))
{
    console.log("Maximum Value is"+Result2);
}
else if((Result3>Result1) && (Result3>Result2) && (Result3>Result4))
{
    console.log("Maximum Value is"+Result3);
}
else if((Result4>Result1) && (Result4>Result2) && (Result4>Result3))
{
    console.log("Maximum Value is"+Result4);
}
//Minimum
if((Result1<Result2) && (Result1<Result3) && (Result1<Result4))
{
    console.log("Minimum Value is"+Result1);
}
else if((Result2<Result1) && (Result2<Result3) && (Result3<Result4))
{
    console.log("Minimum Value is"+Result2);
}
else if((Result3<Result1) && (Result3<Result2) && (Result3<Result4))
{
    console.log("Minimum Value is"+Result3);
}
else if((Result4<Result1) && (Result4<Result2) && (Result4<Result3))
{
    console.log("Minimum Value is"+Result4);
}