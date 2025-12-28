// console.log("hello world");
// console.warn("hello world");
// console.error("hello world");
// console.info("hello world");
// console.table({name: "avii ", age: 23 });

// // js methods

// console.log(Math.ceil(10.3));
// console.log(Math.floor(10.7));
// console.log(Math.round(10.4));
// console.log(Math.abs(-10));
// console.log(Math.trunc(10.373484648));
// console.log(Math.max(10 , 30 , 50));
// console.log(Math.min(10 , 20 , 50));
// console.log(Math.cbrt(125));
// console.log(Math.pow(10 , 3));
// console.log(Math.sqrt(30));
// console.log(Math.random());
// let a = 234.878426868;
// console.log(a.toFixed(3));

//math problems:

// Q. Calculate compound interest.

// let p = Number(prompt("enter principle"));
// let r = Number(prompt("enter a rate of  interest"));
// let t = Number(prompt("enter a time"));

// console.log((p*Math.pow(1 + r/100,t)) - p);

/*

A= P* (1 + r/100)^t
CP = A - P

*/

//Q . Generate OTP .

// console.log(Math.floor(Math.random()*9000 + 1000));

// Q . area of triangle by hero,s formula.

// let a = Number(prompt("enter a first number"));
// let b = Number(prompt("enter a second number"));
// let c = Number(prompt("enter a third number"));

/* 
 s= (a+b+c)/2

 = sqrt of s * (s-a) * (s-b) * (s-c)

*/

// if ( a+b <= c || a+c <=b || b+c<=a){
//     console.log("not possible");
// }
// else{
//     let s = (a+b+c)/2;
//     console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
// }

// Q . circumfrenece of circle .

// let r = Number(prompt("enter a number"));

// console.log(2*Math.PI * r);

// Q. Accept two number and print the greatest between them.

// let a = Number(prompt("enter a first number"));
// let b = Number(prompt("enter a second number"));

// a>b ?console.log(a,"is greater"):console.log(b,"is greater");

// a>b? console.log(a , " is greater then",b ): console.log(b , " is greater then", a);

// if ( a >b){
//     console.log(a , " is greater then",b);
// }
// else if( b>a){
//     console.log(b , " is greater then", a);
// }

//Q. Accept an integer and check wheather it is an even number or odd .

// let a = Number(prompt("enter a number"));

// if (a%2 == 0){
//     console.log( " a is a Even number");
// }
// else{
//     console.log("a is a Odd number");
// }

// Q. Accept name and age from the user . Check it the user is a valid voter or not.

// let a = prompt("enter your name");
// let b = Number(prompt("enter your age"));

// if (b>18){
//     console.log(a, " You are not eligible for vote");
// }
// else{
//     console.log(a, " You are eligible for vote");
// }

//Q. Accept three number and print the greatest among them.

// let a = Number(prompt("enter a first number"));
// let b = Number(prompt("enter a second number"));
// let c = Number(prompt("enter a third number"));

// console.log(Math.max(a,b,c));
// if (a > b && a > c) {
//   console.log("a is greater number to b & c ");
// } else if (b > a && b > c) {
//   console.log("b is greater number to a & c ");
// } else {
//   console.log("c is greater number to a & b ");
// }

// a > b && a > c
//   ? console.log("a is greater number to b & c ")
//   : b > a && b > c
//   ? console.log("b is greater number to a & c ")
//   : console.log("c is greater number to a & b ");

//Q. Accept a year and check if it a leap year or not.

// let a = Number(prompt("enter a year"));

// Aasaan Bhasha mein (Simple Explanation):
// Rule 1: Kya year 4 se divide hota hai? (Agar nahi, toh Leap Year nahi hai).
// Rule 2: Agar 4 se divide hota hai, toh check karo kya wo 100 se divide hota hai?
//         -> Agar 100 se divide NAHI hota (jaise 2024), toh Leap Year HAI.
//         -> Agar 100 se divide HOTA hai (jaise 1900), toh wo Leap Year NAHI hai...
// Rule 3: ...LEKIN agar wo 400 se bhi divide hota hai (jaise 2000), toh wo Leap Year HAI.
//

// if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
//   console.log(a, "is a leap year");
// } else {
//   console.log(a, "is not a leap year");
// }

// a % 4 == 0 && a % 100 != 0 || a % 400 == 0 ? console.log(a, "is a leap year") : console.log(a, "is not a leap year");

// let a = Number(prompt("enter a year"));
// let isleap = false;

// if(a % 4 ==0){
//     if (a % 100 == 0){
//         if (a % 400 == 0){
//             isleap = true;
//         }
//         else{
//             isleap = false;
//         }
//     }
//  else{
//         isleap = true;
//     }
// }
// else{
//     isleap = false;
// }

// console.log(isleap?"leap year":"not leap year");

// if (a % 4==0 && a % 100 != 0 ){
//     console.log(a, "is a leap year");

// }
// else if (a % 400 == 0){
//     console.log(a, "is a leap year");
// }
// else{
//     console.log(a, "is not a leap year");
// }

//Q.Shop discount

// let amount = Number(prompt("enter a amount"));

// if (amount>=0 && amount<=5000){
//     console.log(amount);
// }
// else if (amount>=5001 && amount<=7000){
//     console.log(amount - (5*amount)/100);
// }
// else if (amount>=7001 && amount<=9000){
//     console.log(amount - (10*amount)/100);
// }
// else if (amount>=9001){
//     console.log(amount - (20*amount)/100);
// }
// else{
//     console.log("invalid amount");
// }

// let dis = 0;
// if (amount>=0 && amount<=5000) dis =0;
// else if (amount>=5001 && amount<=7000)dis =5;
// else if (amount>=7001 && amount<=9000)dis =10;
// else if (amount>=9001)dis =20;
// else console.log("invalid amount");

// console.log(amount - (dis*amount)/100);

//Q. Bijli Bill .

// let unit = Number(prompt("enter a unit amount"));

// let amount = 0;

// if (unit >= 0 && unit <= 100) {
//   amount = unit * 4.2;
// } else if (unit >= 101 && unit <= 200) {
//   amount = 100 * 4.2 + (unit - 100) * 6;
// } else if (unit >= 201 && unit <= 400) {
//   amount = 100 * 4.2 + 100 * 6 + (unit - 200) * 8;
// } else if (unit > 400) {
//   amount = 100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13;
// } else {
//   console.log("invalid amount");
// }

// console.log(" your bill is ₹" + amount);

// Q. Accept an integer and print hello world n times.

// let n = Number(prompt("enter a number"));

// for(i=0;i<n;i++){
//     console.log("hello world");
// }

//Q Print natural number up to n number.

// let n = Number(prompt("enter a number"));

// for(i=1;i<=n;i++){
//     console.log(i);
// }

//Q. Reverse for loop . print n to 1.

// let n = Number(prompt("enter a number"));

// for(i=n;i>=1;i--){
//     console.log(i);
// }

//Q. sum up to n terms.

// let n = Number(prompt("enter a number"));
// let sum = 0;

// for(i=0;i<=n;i++){
//     sum = sum + i;
//     console.log(sum);
// }

// console.log(sum);

// Q. Factorial of a number.

// let n = Number(prompt("enter a number"));
// let fact = 1;

// for ( i = n; i >= 1; i--) {
//   fact = fact * i;
// }
// console.log(fact);

// Q. Print the sum of all even & odd numbers in a range separately.

// let n = Number(prompt("enter a number"));
// let even = 0;
// let odd = 0;

// for (i = 1; i <= n; i++){
//     if (i % 2 == 0) {
//         even = even + i;
//     }
//     else{
//         odd = odd + i;
//     }

// }

// console.log(even);
// console.log(odd);

// Q factor of a number

// let n = Number(prompt("enter a number"));

// for(i=0;i<=n/2;i++){
//     if (n % i == 0){
//         console.log(i);
//     }

// }
// console.log(n);

//Q Check the number is prime or not.

// let n = Number(prompt("enter a number"));
// let prime = true;

// for(i=2;i<n/2;i++){
//     if(n % i == 0){
//         prime = false;
//         break;
//     }

// }

// if(prime){
//     console.log(n, "is a prime number");

// }
// else{
//     console.log(n, "is not a prime number");
// }

// let n = Number(prompt("enter a number"));

// let prime = isprime(n);

// if (prime) {
//   console.log(n, "is a prime number");
// } else {
//   console.log(n, "is not a prime number");
// }

// function isprime(n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 == 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

//Q. find number is even or odd.

// let n = Number(prompt("enter a number"));

// if(n % 2 == 0){
//     console.log(n, "is a even number");
// }
// else{
//     console.log(n, "is a odd number");
// }

// Q write a program to take two inputs a , b & find the value of a raised to the power of b.

// let a = Number(prompt("enter a number"));
// let b = Number(prompt("enter b number"));

// console.log(Math.pow(a,b));

//Sum of digits

// let n = Number(prompt("enter a number"));
// let sum = 0;

// while(n >0){
//     let r = n % 10;
//     sum = sum + r;
//     n = Math.floor(n/10);
// }

// console.log(sum);

//Q reverse n number

// let n = Number(prompt("enter a number"));
// let rev = 0;

// while(n >0){
//     let r = n % 10;
//     rev = (rev*10)+r;
//     n = Math.floor(n/10);

// }

// console.log(rev);

//Q automorphic number .

// let n = Number(prompt("enter a number"));
// let copy = n;
// let sq = n * n;

// let count = 0;
// while (n > 0) {
//   count++;
//   n = Math.floor(n / 10);
// }

// if (sq % Math.pow(10, count) == copy) {
//   console.log("automorphic number");
//   console.log(copy);
// } else {
//   console.log("not automorphic number");
// }

// Switch Case

// let a = Number(prompt("enter a number"));

// switch (a) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   case 4:
//     console.log("four");
//     break;
//   case 5:
//     console.log("five");
//     break;
//   case 6:
//     console.log("six");
//     break;
//   case 7:
//     console.log("seven");
//     break;
//   case 8:
//     console.log("eight");
//     break;
//   default:
//     console.log("invalid number");
// }

// Q do while ( repeat hello )

// let a = Number(prompt("enter a number"))

// do{
// console.log("hello world");
// a--;
// }

// while(a>0);

// let a ;

// do{
//     console.log("ram ram");
//     a = prompt("yes / no ").toLowerCase();
// }

// while(a == "yes");

//Q Guess the number.

// let com =Math.floor( Math.random()*100 +1);

// let user;

// do{
//     user = Number(prompt("enter a number"));
// if(isNaN(user)|| user<0 || user>100){
//     console.log("invalid input");
// continue
// }
// if (user>com)console.log("too high , try again");
// else if (user<com)console.log("too low , try again");
// else console.log("Congrats and number was "+ com);
// }

// while(user!=com);

//Q sasta caculator

// let a = Number(prompt("enter a first number"));
// let b = Number(prompt("enter a second number"));

// let op = prompt("enter a operator");
// let user;
// do{
//     switch (op) {
//     case "+":
//     console.log(a+b);
//     break;

//     case "-":
//     console.log(a-b);
//     break;

//     case "*":
//     console.log(a*b);
//     break;

//     case "/":
// if(b !==0) console.log(a/b)
//     else console.log("invalid input");
//     break;

//     case "%":
//     console.log(a%b);
//     break;

//     default:
//     console.log("invalid operator");
//     break;
//     }

//     user = prompt("enter a operator").toLowerCase();

// }
// while(user == "yes");


//Q. Nested looping (pattern programming)

// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*");
// process.stdout.write("*"); (it only work in node js terminal)
// process.stdout.write("*");


// for (i = 1; i <= 5; i++){
//     for (j = 1; j <= 5; j++) {
//     process.stdout.write(" * ");
//     }
//     console.log();
// }

// const prompt = require("prompt-sync")();

// let n = Number(prompt("enter a number"));

// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= i; j++) {
//     process.stdout.write(" * " );
//     }
//     console.log();
// }


// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= i; j++) {
//     process.stdout.write(j+" ");
//     }
//     console.log();
// }

// let n = Number(prompt("enter a number"));

// for(let i =1;i <= n;i++){
//     for(let j = 1; j<=n -i+1; j++){
//         process.stdout.write(j+" ");
//     }
//     console.log();

// }


