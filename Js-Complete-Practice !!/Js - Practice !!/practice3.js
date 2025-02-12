// let a = parseInt(prompt("enter number"));

// function facto(a) {
//     let arr = Array.from(Array(a+1).keys());
//     console.log(arr.slice(1,));
//     let c = arr.slice(1,).reduce((a,b)=>{
//         return a*b;
//     });
//     console.log(c);
// }

// facto(a);


// let userInput = prompt("Enter a number:");
// console.log(typeof userInput); // This will log "string"

// let number = parseInt(userInput);
// console.log(typeof number); // This will log "number"


// code decription ;

// Variable Initialization:
// let a = 10;
// This line initializes a variable a with the value 10.

// Function Definition:
// function facto(number) {
//     let arr = Array.from(Array(number + 1).keys());
//     console.log(arr.slice(1));
//     let c = arr.slice(1).reduce((a, b) => {
//         return a * b;
//     });
//     console.log(c);
// }
// This defines a function facto that takes a single parameter number.

// Array Creation:
// let arr = Array.from(Array(number + 1).keys());
// This line creates an array arr containing numbers from 0 to number. For example, if number is 10, arr will be [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// Array Slicing:
// console.log(arr.slice(1));
// This line slices the array arr to exclude the first element (0) and logs the result to the console. For example, it will log [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// Array Reduction:
// let c = arr.slice(1).reduce((a, b) => {
//     return a * b;
// });
// This line slices the array arr to exclude the first element (0) and then uses the reduce method to calculate the product of all elements in the sliced array. The result is stored in the variable c.

// Logging the Result:
// console.log(c);
// This line logs the result of the factorial calculation to the console.

// Function Call:
// facto(a);
// This line calls the facto function with the argument a (which is 10).

// In summary, your code calculates the factorial of 10 by creating an array of numbers from 1 to 10, then multiplying all the elements together using the reduce method. The result is logged to the console.

// let a = parseInt(prompt("enter your factorial number"));

// function facto (number){
//     let xi = 1 ;
//    for (let i = 1; i <= number; i++) {
//    xi*=i;
//    }
//    return xi ;
// }

// console.log(facto(a));

// let x = parseInt(prompt("enter your number"));

function func(x){
    let a = 1 ;
    for (let index = 1; index <= x; index++) {
        a *= index;
    }
    return a ;
}

func (x);


