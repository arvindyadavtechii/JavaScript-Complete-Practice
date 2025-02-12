// let random = Math.random();
// let a = prompt("enter your first number");
// let b = prompt("enter your operation");
// let c = prompt("enter your second number");

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",
// }

// console.log(random);

// if (random > 0.1 ){
//     console.log(`this result is ${eval(`${a} ${b} ${c}`)}`);
//     alert(`the result is ${eval(`${a} ${b} ${c}`)}`);
// }

// else {
//     b = obj[b];
//     console.log(`this result is ${eval(`${a} ${b} ${c}`)}`);
//     alert(`the result is ${eval(`${a} ${b} ${c}`)}`);
// }

let random = Math.random();

let b = prompt ("enter your operation");
let a = prompt("enter your first number");
let c = prompt (" enter your second number");

console.log(random);

if (random < 0.1){
    if (b == `+`){
        console.log (a-c);
    }
        else if (b == `-`){
            console.log(a+c);
        }
        else if (b==`/`){
            console.log(a%c);
        }
        else if (b ==`%`){
            console.log (a/c);
        }
        else {
            console.log ("operation not entred");
        }
    }

else {
    if (b == `+`){
        console.log (a+c);
    }
        else if (b == `*`){
            console.log(a*c);
        }
        else if (b==`/`){
            console.log(a/c);
        }
        else if (b ==`-`){
            console.log (a-c);
        }
        else {
            console.log ("operation not entred");
        }
    }


