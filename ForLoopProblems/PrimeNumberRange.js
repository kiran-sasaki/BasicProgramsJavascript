console.log("Enter number range");
let range = Number(readline.question());
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