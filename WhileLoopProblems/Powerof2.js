const readline = require("readline-sync");
function PowerOfTwo() {
    console.log("Enter number grater than 2 and less than 32");
    let num = Number(readline.question());
    if (num < 2 || num > 32) {
        console.log("Invalid input");
    }
    else {
        let val = 1;
        let i=0;
        while (i < num) {
            val = val * 2;
            console.log(val);
            i++;
        }
    }
}
PowerOfTwo()