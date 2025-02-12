let a = prompt("enter first number");
let b = prompt("enter second number");

if (isNaN(a)|| isNaN(b)){
    throw SyntaxError("sorry this is not a integer value");
}
let sum = parseInt(a) + parseInt(b);


// try {
//     console.log(`the sum is ${sum *x}`);
// } catch (error) {
//     console.log(`error occred`);
// }

function main(){
    let x = 1;
try {
    console.log(`the sum is ${sum * x}`);
    return true;
} catch (error) {
    console.log(`error occred`);
    return false;
}
finally{
    console.log (`file are beign claose and db connection is being closed`);
}
}

let c = main();