
// variables in js .......

// variables are containers where we store data 

// variable keywords - let , var , const !!

// ex :- let fullname = " aman ";
// let age = 34;
// let number = 1000
// console.log ( fullname );


// data types i js ......

// data is what type of value store in varibles !!

// ex :- number , string , boolean , undegined, null , bigint , symbol 

// premative (7) & not premative data types ( object ,array ,function)

// ex :- 

// 1.
// const product = { 
// titles: " ball pen ",
// rationg:4,
// offer: 5,
// price : 270,
// };
// console.logo (product);

// 2.const profile= {
// username: "yash",
// isfollow: true,
// followers: 567,
// following: 52,
// };
// console.log( typeof profile["followers"]);


// operater in js ......

// arithmetic operaters :  + - * / 

// . module %
// . exponentiation **
// . increment : ++a , a++ 
// . decrement : --a , a--

// ex:-

// let a = 4;
// let b = 6 ;

// console.log( " a = ", a , " & b= ", b);
// console,log(" a+b= ", a+b)
// console,log(" a-b= ", a-b)
// console,log(" a*b= ", a*b)
// console,log(" a/b= ", a/b)

// assignment operaters : = += -= *= %= **=

// comparison operators : equal to - == , equal to & type - ===
// not equal - != , not equal to & type - !==
// > >= < <= 
// ex : - 

// let a = 5; 
// let b = 6; 

// console.log ( " 5!= 6 " , a != b );
// console.log ( " 5!==6 ", a !==b );

// logical operaters 

// logical and &&
// logical or ||
// logical not ! 

// ternary operater 
// ?

// conditionl statement in js.......

//  if 
//  if else 
//  else if

//  ex: - 
// 1.
//  let num= 20;

//  if ( num %2 === 0 ){
//  console.log(num, " is even ");
//  }
//  else {
//  console.log(num, " is odd");
// }

// 2.
// let age= 20;
// if(age>=17){
// console.log(" you can,t do vote");
// }
// else if ( age<=18){
// console.log(" you can vote");
// }
// else {
// console.log("toffee khaa jaakar");
// }

// loops in js ....

// for loop 
// while loop 
// do while loop 
// for of loop 
// for in loop 

// ex:- 
// 1.
// let sum = 0 ;
// let n = 100;

// for ( let i = 1 ; i <=n ; i++ ){
// sum = sum+1;
// }

// console.log(" sum = ", sum );
// console.log(" loop has ended");

// 2.
// let i =1 
// while( i <= 5){
// console.log ( " aviii  ");
// i++
// }

// 3. 
// let i=20 
// do {
// console.log ( " avii ");
// i++
// }
// while( i=>10 );

// 4.
// let str = " arvind ";
// for ( let i of str){
// console.log("i =", i);
// }

// console.log( " size of srr=" size);

// 5.
// let student = { 
// name : " rahul ",
// age : 65,
// cgpa : 6.9,
// ispass : pass,
// };

// for( let key in student){
// console.log("key=",key , "value", student[key]);
// }


// 6. 
// let gamenum = 25;
// let usernum = prompt(" guess the game number : ");

// while ( usernum!=gamenum ) {
// usernum = prompt (" you enter wrong number ... guses again : ");
// }

// console.log(" congratulation , you entered the right number !! ");



// strings in js .....

// creating string ... 
// let str = " avii ";

// string length ....
// str.length 

// string indices .....
// str [ 0 ], str [ 1 ] , str [ 2 ]

// ex : - 

// 1. 
// let obj = { 
// item: " pen ";
// price: 10; 
// };

// template literals in string .....
// let output = ' the cost of ${ obj.item} is ${ obj.price} rupees';

// console.log (output);

// or 
// normal string template in string ....
// console.log( " the cost of " , obj.item, " is" , obj.price, " rupees");

// /n line gap 
// /t tape space 

// extra methods of strings in js .......

// strings is immutable in js 

// this methods not change string real values .....

// str.toupperCase()

// str.tolowerCase()

// str.trim () ( for removing extra space in string )

// ........................................


// str.slice( start , end ) ( return part of string )

// str1.concat( str2 ) (join str2 with str1 )

// str.replace( searchval , newVal)

// str.charaAt ( idx)

// ex:- 
// 1.
// let str= " 012345678";
// console.log ( str.slice(1 , 2 ));

// 2.
// let str1 = " arvind ";
// let str2 = " yadav ";
// let result = str2.concat(str1);
// console.log ( result  );

// 3.
// let str= " hello ";
// console.log(str.replace(" lo " , " p "));

// 4. 
// let str=" arvind ";
// console.log( str.chartat( 3) );

// 5.
// let fname = prompt ( "enter your name" );
// let uname = " @ " + fname + fname.length;
// console.log(uname);


// Array in js .......

// array is mutable in js ......

// create array .....
// let hero = [ " batman ", "spiderman" , " speedy" ];

// ex:- 
// let hero = [ " batman ", "spiderman" , " speedy" ];
// console,log(hero);
// console,log(hero.length);

// array indices .......

// let hero = [ " batman ", "spiderman" , " speedy" ];
// console,log (hero[0]);
// console,log (hero[1]);

// ex :- 

// 1.
// let hero = [ " batman ", "spiderman" , " speedy" ];

// for( let idx=0 ; idx<hero.length ; idx++){
// console.log(hero[idx]);
// }

// 2.
// let marks = [ 56 , 35 ,55 ,32 , 54 ];
// let sum =0 

// for ( let val of marks ) {
// sum+=val;
// }

// let avg = sum / marks.length;
// console.log( " avg marks of student = " , avg);

// 3. 
// let items = [ 345, 454 ,445 ,664, 436];
// let i =0;
// for ( let val of items){ 
// console.log ( " value at index " , i , "=" , val);
// let offer = val/10 ;
// items[i]=items[i]-offer;
// console.log ( ' value after offer = $(items[i]));
// i++
// }

// or 
// let items = [ 345, 454 ,445 ,664, 436];
// for ( let i =0 ; i<items.length ; i++){
// let offer = items [ i ]/10
// items [i] -= offer;
// }

// console.log( items);


// array methods in js ..........

// array.push( ) : add to end 

// array.pop ( ) : delete from end & return 

// array.tostring( ) : convert array to string ( give another string not change orignal array value )

// array.concate () : join multiple arryas & return result 

// array.unshift () : add to start 

// array.shift (): delete from start & return 

// array.slice(start,end): returns a piece of the array( not change orignal array)

// array.splice(add , remove , replace ): change orignal array 

// ex:- 
// 1.
// let fooditems = ["apple" , " banana " , " lichi"];
// fooditems.push ( " orange ");
// console.log ( fooditems );

// 2.
// let fooditems = ["apple" , " banana " , " lichi"];
// fooditems.pop ();
// console.log ( fooditems );

// 3.
// let fooditems = ["apple" , " banana " , " lichi"];
// console.log ( fooditems );
// console.log ( fooditems.tostring ());

// 4. ``
// let  marvelheroes = [" thor ",  " spiderman" , " ironman"];
// let dcheroes = [ " superman " , " batman "];
// let indianheroes = [ " shaktiman ", " krish"];

// let heroes = marvelheroes.concat(dcheroes,indianheroes);
// console.log ( heroes); 

// 5.
// let  marvelheroes = [" thor ",  " spiderman" , " ironman"];
// marvelheroes.unshift(" antman ");

// 6.
// let  marvelheroes = [" thor ",  " spiderman" , " ironman"];
// let val = marvelheroes.shift();
// console.log(" deleted " , val);

// 7.
// // use for making copy of Array ....
// let  marvelheroes = [" thor ",  " spiderman" , " ironman"];
// console.log(" marvelheroes");
// console.log(marvelheroes.slice(0 ,3));

// 8.
// let arr = [ 1,2,3,4,5,7,8 ];

// arr.splice(2 , 2 ,101 ,102);

// add element ....
// arr.splice(2,0,101);

// delete element ....
// arr.splice(3,1);

// relace element ....
// arr.splice(3,1,101);


// function in js .....

// function is a block of code  that perform a specific task , can be invoked whenever needed

// ...............................

// function definition....

// function functionname( ){ 
// // code 
// }

// function call...

// function call ();

// parameterrise fuction....

// function functionname ( pa1 , pa2){
// // code
// }

// ...............................

// ex:- 
// 1.
// fuction sum ( x , y ){
// s=x+y;
// console.log( " before return ");
// return s;
// }

// let val = sum( 3, 4);
// console.log(val);

// 2.
// function add( a , b ){ 
// return a+b;
// }

// function mul( a , b ){
// return a * b ;
// }

// console.log (add( 3 , 5));
// console.log (mul(3,5));

// ...................................

// arrow functions in js .......

// compact way of writing a fuction 

// const sum = ( a , b )=>{
// return a+b;   
// }

// ex:-

// 1. 
// const arrowsum = ( a , b )=>{
// console.log( a + b );    
// };
//  arrowsum (3,5);
// 2.
// const arrowmul = ( a , b )=> { 
// console.log( a*b );  
// };
// arrowmul(2, 3);

// .....................................

// function coutvowels ( str) {
// let count = 0;
// for( let char of str){
// if (char==="a" ||
// char==="e" ||
// char==="i" ||
// char==="o" ||
// char==="u" ||
// )
// {
// count++;
// }
// }
// return count;
// }

// or 

// const countvowels = ( str)=> {
// let count = 0;
// for( let char of str){
// if (char==="a" ||
// char==="e" ||
// char==="i" ||
// char==="o" ||
// char==="u" ||
// )
// {
// count++;
// }
// }
// return count;
// };

// .........................................

// foreach loop in arrays.........

// arr.foreach( callbackfuction)
// callbackfunction : here , it is a function to execute for each element in the array 

// * a callback is A  function passed as an argument to another function. *

// arr.foreach( ( val ) => { 
//     console.log(val);
// })

// ex :- 
// let arr = [ 1 ,2, 3 ,4 ,5];
// arr.foreach(function printval(val){
// console.log(val);
// })

// or 
// //for value 
// let arr = [ 1 ,2, 3 ,4 ,5];
// arr.foreach((val)=>{
// console.log(val);
// });

// //for value & index
// let arr = [ 1 ,2, 3 ,4 ,5];
// arr.foreach((val ,idx)=>{
// console.log(val,idx);
// });

// //for value ,index & array
// let arr = [ 1 ,2, 3 ,4 ,5];
// arr.foreach((val ,idx , arr)=>{
// console.log(val , idx , arr);
// });


// let num = [ 4 , 5 , 6 , 7];

// let squarenum = (num)=>{
// console.log(num*num);    
// };

// num.foreach( squarenum);

// ..........................................

// some more array methhods in js ...........




// map .....

// creates a new array with the result of some operation. 
// the value its callback returns are used to form new array .

// arr.map( callbackfnx ( value , index , array ))

// let newarr = arr.map ((val)=>{
// return val *2;    
// });

// ex :- 

// let num = [ 4 , 5 , 6 . 7];

// let newarray = num.map(val)=>{
// return val*2:    
// };

// console.log ( newarray);

// let calcsquare = (num)=>{
// console.log(num*num);    
// };





// filter .........

// creates a new array of elements that gives true for a 
// condition/ filter.
// eg: all even elements 

// let newarr = arr.filter ( ( val)=> {
// return val%2 ===0 ;    
// })

// ex:- 
// let arr = [ 1 , 2, 3 , 4, 5];

// let evenarr = arr.filter(val)=>{
// return val % 2    
// }

// console.log(evenarr);




// reduce .........

// performs some operation & reduces the array to 
// a single value. it returns that single value.

// let arr = [ 5 , 6, 7 ,8 ];

// const output = arr.reduce((prev , curr)=>{
// return prev + curr ;    
// });

// console.log ( output); 

// ..............................................


// window object in js ....
// the window object represent on open window in a browser. 
// it is browser,s object (not javascript) & is automatically created by browser. 

// it is a global object with lots of properties & methods .

// DOM in js ....

// when a web page is loaded, the browser creates a document object model 
// (dom) of the page .

// console.log()... use for normal html document or data print 
// console.dir()... use for object printings of window  

// console.dir( window.document);
// console.die(document);

// console.die(document.body);

// ..............................

// dom manipulation ....

// selecting with id ..

// document.getelementbyid("my id ")

// selecting with class ..

// document.getelementbyclassname(" my class ")

// selecting with tag ..

// document.getelementtagname("p")

// ex:- 

// 1.
// let heading = document.getelementbyid (" heading ");
// console.dir (heading);

// 2.
// let heading = document.getbyclassname("heading");
// console.dir(heading);
// console.log( heading);

// 3.

// let para = document.getbytagname("p");
// console.dir(para);
// console.log(para);

// .............................................

// dom manupulation properties....

// .tagname : returns tag for element nodes 
// .innertext : returns the text content of the element and all its children 
// .innerhtml : returns the plain text or html content in the element 
// .textcontent : returns textual content even for hidden eliments

// ex:- 

// 1. 
// let para = document.getbytagname("p");
// console.dir(para.tagname);

// console.dir(document.body.firstchild);

// console.dir(document.body.lastchild);

// 2.
// console.dir(document.queryslector("div").childrens);

// let div= document.quaryslector("div");
// console.dir(div.innertext);

// let div= document.quaryslector("div");
// console.dir(div.innertext);
// div.innertext="<div>hello!!</div>";

// 3.
// let div= document.quaryslector("div");
// console.dir(div.innerhtml);

// let div= document.quaryslector("div");
// console.dir(div.innerhtml);
// div.innerhtml="<div><i>hello!!</i></div>";

// 4.
// let div= document.quaryslector("div");
// console.dir(div.innerhtml);
// div.innerhtml="<div><i>hello!!</i></div>";
// console.dir(div.textcontent);

// practice question .... ex:-

// let h2 = document.querryselector("h2");
// console.dir(h2.innertext)+ " hello world ";

// let divs = document.queryselectorall(".box");

// let idx =1 
// for ( div of divs){
// div.innertext = ' new number ${idx}" ';
// idx++;
// }

// ...................................................

// dom manipulation attribtes ....

// . getattributes(attr)
// . getattributes(attr ,values);

// ex:- 
// 1. 
// let div = document.queryselector(" div ");
// console.dir (div);

// let id = div.getattributes ("id");
// console.log(id);

// 2.
// let para = document.queryselector("p");
// console.log(para.getattribute("class"));

// for changing class name ....

// let para = document.queryselector("p");
// console.log(para.getattribute("class","new class"));


// dom manipulation style ......

// . node.style 

// ex:- 

// let div = document.queryselector("div");

// div.style.backgroundcolor ="green"
// or 
// div.style.backgroundcolor ="purple"

// .............................................

// dom manipulation-insert elements .....

// .node.apend(el) // adds at the end of node (inside)
// .node.prepend(el) // adds at the start of node (inside)
// .node.before(el) // adds before the node (outside)
// .node.after(el) // adds after the node (outside)

// ex:- 
// let newbtn = document.createelement("button");
// newbtn.innertext = "click me ";
// console.log(newbtn)

// 1.
// let div= document.query selector("div");
// div.append(newbtn);

// 2
// let newheading = document.createelement("h1");
// nweheading.innerhtml = " <i> its new one <i>";

// document.quaryselector("body").prepend(newheading);


// dom manipulation-delete element .....
// .node.remove(el)

// ex:- 
// let para = document.queryselector("p");
// para.remove();

// newheading.remove();

// practice question .....

// let newbtn = document.createelement("button");
// newbtn.innertext = "click me ";

// newbtn.style.color= " white";
// newbtn.style.backgroundcolor = "red";

// document.queryselector("body").prepend(newbtn);

// ...................................................

// event in js .........

// the change in the state of an object is known as an event 

// event are fired to notify code of " interesting changes" that may affect code execution.


// .mouse eventa (click, double click etc )
// .keyboard event (keyperess , keyup , keydown)
// .form event(submit etc .)
// .print event & many more ....

// ex :- 
//  entering inside html code java code ......(inline event handling)

// 1.
// <button onclick ="console.log('button was clicked ');alert('hello ')">click me </button> 
// <button ondblclick ="console.log('button was clicked 2 times');alert('hello ')">click me 2 times </button>

// 2.
// <div onmouseover="console.log('you are inside div')">this is A div</div>


//  entering inside html code java code ......(js event handling)

// let btn1 = document.queryselector("#btn1");

// 1.
// btn.onclick = () => {
//     console.log("btn wass clicked")
//     let a = 25;
//     a++;
//    console.log(a);
//     }

// 2.
// let div = document.queryselector("div");
// div.onmouseover = () => {
//     console.log (" you are inside div ");
// }

// js event handling more priority compare to html inline handling....
// only one an event can be created for a code not more than one ....


// ....................................................................................


// event object ....

// it is a special object that has details about the event.

// all event handlers have access to the event object,s properties and methods.

// node.event = (e) => {
//     // handle here 
//     }

//     e.target , e.type , e.clientX, e.clientY

// ex:- 
// let btn1 = document.queryselector("btn1");

// btn1.oneclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientx, evt.clienty);
//     };

// .....................................................................................

// event listeners in js .........

// node.addeventlistener(event,callback)

// node.removeeventlistener(event , callback)

// *note : the callback reference should be same to remove ....


// ex:- 
// 1.

// let btn1 = document.queryselector("btn1");

// btn1.addeventlistener("click" , () =>{
//     console.log("button was clicked");
//     });

// also print event objects....

// btn1.addeventlistener("click" , (evt) =>{
//     console.log("button was clicked");
//     });


// 2.

// let btn1 = document.queryselector("btn1");


// btn1.addeventlistener("click" , () =>{
//     console.log("button was clicked");
//     });


//  btn1.addeventlistener("click" , () =>{
//     console.log("button was clicked 2");
//     });

// const clicked3 = () =>{
//     console.log("button was clicked 3");
//     });

//     btn1.removeeventlistener("click", clicked);


// practice question ...........

// let modebtn = document.queryselector("#mode");
// let currmode = "light";

// modebtn.addeventlistener("click", () =>{
//     if (currmode === "light"){
//     currmode = "dark";
//     document.queryselector ("body").style.backgroundcolor = "black";
//     }
//     else {
//     currmode = "light";
// }  document.queryselector ("body").style.backgroundcolor = "white";
//     } );



// by css ........


// let modebtn = document.queryselector("#mode");
// let body = document.queryselector("body");
// let currmode = "light";

//  if (currmode === "light"){
//     currmode = "dark";
//     body.classlist.add("dark");
//     body.classlist.remove("remove");
//     }
//     else {
//     currmode = "light";
//     body.classlist.add("dark");
//     body.classlist.remove("remove");
//     } 
    
//     console.log (currmode);
// )};


// ............................................................................................


// class & object in js .....

// PROTOTYPE ....

// a javascript objecct is an entity having state and behavior (properties and method).
 
// js object have a special property called prototype.

// we can set prototype using _ _ proto_ _ 



// *if object & prototype have same method objects will be used . 

// ex:-

// const employee = {
// calctax(){
// console.log("tax rate is 10 %");
// },
// };

// const karanarjun = {
// salary : 5000,
// calctax(){
// console.log(" tax rate is 28%");
// },
// };

// karanarjun__proto__= employee;
// console.log(employee);
// console.log(karanarjun);

// ......................................................

// class in js ....

// class is a program - code template for creating object.

// those object will have some state (variables)& some behaviour (function) inside it.

// class my class {
// constructor(){...}
// my method(){...}
// }

// let myobj= new myclass();

// ex:- 

// class toyatacar{
// start(){
// console.log ("start");
// }
// stop(){
// console.log ("stop");
// }
// setbrand(brand){
// this.brand=brand;
// }
// }

// let fortuner = new toyatacar();
// fortuner.setbrand("fortuner");
// let lexus = new toyatacar();
// lexus.setbrand("fortuner");

// .............................................................

// constructor in class ...........

// constructor () method is :

// .automatically invoked by new
// .initializes object

// class my class {
// constructor(){...}
// my method(){...}
// }


// ex:- 

// class toyatacar{
// constructor(brand,mileage){
// console.log("craeting new onject");
// this.brand = brand;
// this.mileage = mileage;
// }
// start(){
// console.log ("start");
// }
// stop(){
// console.log ("stop");
// }
// }

// let fortuner = new toyatacar();
// console.log(fortuner);
// let lexus = new toyatacar();
// console.log(lexus);

// ......................................................................

// inheritence in js ....

// inheritence is passing drown properties & method from parent class to child class.

// class parent {
// }

// class child extends parent {
// }

// *if child & parent have same method, childs 
// method will be used  [ method overriding].


// ex:- 

// class person {
// eat(){
// console.log("eat");
// }
// sleep(){
// console.log("sleep");
// }
// }

// class enginner extends person {
// work(){
// console.log("solve problem, build something");
// }
// }

// let avii = new enginner();
// console.log(avii);

// ........................................................................

// super keyword in js.......

// the super keyword is used to call the constructor of its parent class to access the parents 
// properties and methods.

// super(args)//calls parents constructor

// super.parentmethod(args)


// ex:- 

// class person {
// constructor(){
// console.log("enter parent constructor");
// this.species = "homo sapians";
// }

// eat(){
// console.log("eat");
// }
// sleep(){
// console.log("sleep");
// }
// }

// class enginner extends person {
// constructor(branch){
// console.log("enter child constructor");
// super();
// this.branch = branch;
// console.log("exit child constructor");
// }
// work(){
// console.log("solve problem, build something");
// }
// }

// let avii = new engineer("chamical engg");


// or


// class person {
// constructor(){
// console.log("enter parent constructor");
// this.species = "homo sapians";
// this.name = name;
// }

// eat(){
// console.log("eat");
// }
// sleep(){
// console.log("sleep");
// }
// }

// class enginner extends person {
// constructor(name){
// super(name);
// }
// work(){
// super.eat();
// console.log("solve problem, build something");
// }
// }

// let avii = new engineer("arvind");

// .................................................................................................

// practice question ......

// let data = "secret information";

// class user {
// constructor (name,email){
// this.name = name;
// this.eamil = eamil;
// }

// viewdata (){
// console.log(" data =", data);
// }
// }

// let student1 = new user("avii", "abc@email.com");
// let student2 = new user("aman", "aman@email.com");

// let teacher1 = new user("dean","dean@college.com");


// ....................................................................................


// error handling in js ...............

// try - catch 

// try {
// ....nromal code
// }

// catch(err){//err is error object
// ....handling error

// }

// ex:-

// let a = 5;
// let b = 10;
// console.log("a=",a);
// console.log("b=",b);
// console.log("a+b=",a+b);
// try{
// console.log("a=",a);
// }
// catch(err){
// console.log(err);
// }
// console.log("a-b=",a-b);
// console.log("a/b=",a/b);
// console.log("a*b=",a*b);


// ............................................................


// what this chapter is about?

// asyn await >> promise chains >> callback hell



// sync in js .....

// synchronous ...
// sychronous means the code runs in a particular sequence of instruction given in the program.
// each instruction waits for the previous instruction to complete its execution.


// asynchronous ....
// due to asynchronous programming something imp instruction get 
// blocked due to some previous instruction, which cause a delay in the UI.
// asynchronous code execution allow to execute next instuctions immediatelly and 
// doesn,t block the flow .


// ex:- 

// console.log(" one ");
// console.log(" two ");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);//timeout;

// console.log("three");
// console.log("four");

// .............................................................


// sychronous programming callback .....

// function sum(a,b){
//     console.log(a+b);
// }

// fuction calculator(a,b, sumCallback){
// sumCallback(a,b);
// }

// calculator(1,2,sum);
// or 
// calculator(1,2,(a,b)=>{
//     console.log(a+b); 
// });


// ..............................................................



// asynchronous programming callback .....

// const hello = ()=> {
//     console.log("hello");
// };

// setTimeout(hello,3000);


// ..............................................................


// callback hell in js ..........
// callback hell : nested callbacks stacked below one another 
// forming a pyramid structure.
// (pyramid of doom)

// this style of programming becomes difficult to understand & manage.

// ex:- 
 
// like ..... nested if else ......

// let age=29;
// if(age>=18){
//     if(age>=60){
//         console.log("senior");
//     }else{
//         console.log("middle");
//     }
//     else{
//         console.log("child");
//     }
// }

// like ..... nested functions .......

// for(let i =0 ; i < 5 ; i++){
//     let str =""
//     for (let j=0;j<5,j++){
//     str = str+j;
//     }
//     console.log(i,str);
// }

// ................................................................

// callbackhell ex:- 

// ex:- 

// fuction getdata (dataid, getnextdata){

// setTimeout(() => {
//   console,log("data",dataid) ; 
//   if(getnextdata){
//     getnextdata();
//   }
// }, 2000);
// }

// getdata(1,()=>{
//     getdata(2, ()=>{
//         getdata(3,()=>{
//             getdata(4,()=>{
//                 getdata(5);
//             });
//         });
//     });
// });


// much more complex writing callback .....

// fuction getdata (dataid, getnextdata){

//     setTimeout(() => {
//       console,log("data",dataid) ; 
//       if(getnextdata){
//         getnextdata();
//       }
//     }, 2000);
//     }
    
//     getdata(1,()=>{
//         console.log("getting data2..............");
//         getdata(2, ()=>{
//             console.log("getting data3 ..............");
//             getdata(3,()=>{
//                 console.log("getting data4..............");
//                 getdata(4,()=>{
//                     console.log("getting data5..............");
//                     getdata(5);
//                 });
//             });
//         });
//     });


// ..................................................................................


// for solving callback problems promises comes ......


// promises in js ......

// promise is for " eventual " completion of task . it is ann object in js .

// it is a solution to callback hell.

 
// let promise = new promise((resolve, reject)=>{....})
//                             ^^^^^^^^^^^^
//                        fuction with 2 handlers

// *resolve & reject ARE  callbacks provided by js ...


// proises have 3 states resolve , pending , reject ......

// ex :- 

// let promise = new promise ((resolve,reject)=>{
//     console.log("its a promise");
//     reject ("some error occured");
// })


// 1.
// fuction getdata (dataid, getnextdata){
// return new promise ((resolve,reject)=>{
//     setTimeout(() => {
//         console,log("data",dataid) ; 
//         resolve("success");
//         if(getnextdata){
//           getnextdata();
//         }
//       }, 2000);
// });
//     }

// let resultp = getdata;
// console.log(resultp);


// ........................................................................



// incase we can,t send data then promise reject .....

// fuction getdata (dataid, getnextdata){
//     return new promise ((resolve,reject)=>{
//         setTimeout(() => {
//             //console,log("data",dataid) ; 
//            // resolve("success");
//            reject("error");
//             if(getnextdata){
//               getnextdata();
//             }
//           }, 2000);
//     });
//         }
    
//     let resultp = getdata;
//     console.log(resultp);


// .......................................................................


// how we use promises in js !!

// promises ...

// .then () & .catch

// promise.then ((res)=>{....});
// promise.catch ((err)=>{....});

// ex:- 

// const getpromise = () => {
//     new promise ((resolve , reject)=>{
//         console.log("its a promise");
//         resolve (" success ");
//     });
// }


// let promise = getpromise();
// promise.then(()=>{
//     console.log("promise fulfield ");
// });




// if we reject prmise is this case we can,t print then message ....





// const getpromise = () => {
//     new promise ((resolve , reject)=>{
//         console.log("its a promise");
//         reject (" error ");
//     });
// }


// let promise = getpromise();
// promise.catch(()=>{
//     console.log("error occured ");
// });




// final we can print message with then (success) and catch (rejected) ........




// let promise = getpromise();
// promise.then(()=>{
//     console.log("promise fulfield ");
// });

// if we reject prmise is this case we can,t print then message ....

// const getpromise = () => {
//     new promise ((resolve , reject)=>{
//         console.log("its a promise");
//         reject (" error ");
//     });
// }

// let promise = getpromise();
// promise.then((res)=>{
//     console.log("promise fulfield ",res);
// });


// let promise = getpromise();
// promise.catch((err)=>{
//     console.log("error occured ",err);
// });




// .......................................................................................



// promise chaining in js ........


// ex:- 

// fuction asynchronous (){
//     return new promise ((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some details");
//         }, 4000);
//     });
// }

// fuction asynchronous2 (){
//     return new promise ((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some details");
//         }, 4000);
//     });
// }

// console.log ("fetching data 1 ");
// let p1 = asynchronous();
// p1.then((res)=>{
//     console.log ("fetching data 2 ");
//     let p2 = asynchronous2();
//     p2.then((res)=>{
//     });
// });
// or 

// console.log ("fetching data 1 ");
// asynchronous().p1.then((res)=>{
//     console.log ("fetching data 2 ");
// asynchronous2().p2.then((res)=>{
//     });
// });



// ............................................................................................



// same work by promises ....

// fuction getdata (dataid, getnextdata){

//     setTimeout(() => {
//       console,log("data",dataid) ; 
//       if(getnextdata){
//         getnextdata();
//       }
//     }, 2000);
//     }
 
// console.log("getting data 1 .............");
// getdata (1).then((res){
// console.log("getting data 2 .............");
//     console.log(res);
//     getdata(2).then((res){
// console.log("getting data 3 .............");
//         console.log(res);
//         getdata(3).then((res){
// console.log("getting data 4 .............");
//             console.log(res);
//             getdata(4).then((res){
// console.log("getting data 5 .............");
//                 console.log(res);
//                 getdata(5).then((res){
//                 console.log(res);
//                 })
//             })
//         })
//     })
// })


//             or 

// console.log("getting data1...........");
// getdata(1).then((res)=>{
//     console.log("getting data2...........");
//     return.getdata(2);
//  }).then((res)=>{
//     console.log("getting data3...........");
//     return.getdata(3);
// }).then((res)=>{
//     console.log("getting data4...........");
//     return.getdata(4);
// }).then((res)=>{
//     console.log("getting data5...........");
//     return.getdata(5);
//  }).then((res)=>{
//     console.log(res);
//  });



//  .........................................................................



//  async - await in js ............

//  async function always returns a proise.

//  async function functionname(params){.....}

//  await pause the execution of its surrounding async function until the promise is settled .


// ex:- 

// async function hello() {
//     console.log("hello");
// }

// ..................................

// await ex:-

// fuction api (){
//     return new promise ((resolve , reject)=>{
//         setTimeout(() => {
//             console.log("weather data ");
//         },2000);
//     });
// }

// async function getweatherdata() {
//     await api(); 
//     await api();
// }


// ..................................................................................


// same work by asyn fuction ...........

// fuction getdata (dataid, getnextdata){

//     setTimeout(() => {
//       console,log("data",dataid) ; 
//       if(getnextdata){
//         getnextdata();
//       }
//     }, 2000);
//     }

//     async function getalldata() {
//         await getdata(1);
//         console.log("getting data 1 .....");
//         await getdata(2);
//         console.log("getting data 1 .....");
//         await getdata(3);
//         console.log("getting data 1 .....");
//         await getdata(4);
//         console.log("getting data 1 .....");
//         await getdata(5);
//         console.log("getting data 1 .....");
//         await getdata(6);
//     }


//     ..............................................................................


//     IIFE : - immediately invoked function expression ....

//     iife is a function that is called immediatelly as soon as it is defined .

//     (function (params) {
//         ////
//     })();

//     (()=> {
//         //
//     })();
    
//     (async (params) => {
//        // 
//     })();


//     ex:- 

//     fuction getdata (dataid, getnextdata){

//         setTimeout(() => {
//           console,log("data",dataid) ; 
//           if(getnextdata){
//             getnextdata();
//           }
//         }, 2000);
//         }
    
//         (async function getalldata() {
//             await getdata(1);
//             console.log("getting data 1 .....");
//             await getdata(2);
//             console.log("getting data 1 .....");
//             await getdata(3);
//             console.log("getting data 1 .....");
//             await getdata(4);
//             console.log("getting data 1 .....");
//             await getdata(5);
//             console.log("getting data 1 .....");
//             await getdata(6);
//         })();



// ...............................................................................................


// API :- application programming interface ....

// fatch API in js ............

// the fetch api provides an interface for fetching (sending / receiving) resources.

// it uses request and respond objects.

// the fetch () method is used to fatch a resource (data).

// let promise = fetch (url , [options])


// ex:- 
// const url = "https://cat-fact.herokuapp.com/facts";

// const getfact = async () => {
//     console.log("getting data .....");
//     let response = await fectch (url);
//     console.log(response);
// };

// not giving requested data from url .....

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// understanding Terms .........

// AJAX : -  is asynchronous js & xml
// JSON : -  is javascript object notation 
// Json()method : - returns a second promise that resolve with the result 
// of parsing the response body text as json . (input is JSON is JS object)


// js method for getting actual usefull data .....

// ex :-

// const url = "https://cat-fact.herokuapp.com/facts";

// const getfact = async () => {
//     console.log("getting data .....");
//     let response = await fectch (url);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].text);
// };




// or 

// for print facts on web page by html & js .....



// const url = "https://cat-fact.herokuapp.com/facts";
// const factpara = document.queryselector("#fact");
// const btn = document.quaryselector("#btn");


// const getfact = async () => {
//     console.log("getting data .....");
//     let response = await fectch (url);
//     console.log(response);
//     let data = await response.json();
//     factpara.innertext = data[0].text;
// };

// btn.addeventlistener("click",getfact);




// ..................................................................................

// same work can do by promises .........



// const url = "https://cat-fact.herokuapp.com/facts";
// const factpara = document.queryselector("#fact");
// const btn = document.quaryselector("#btn");


// const getfact(){
//     fetch(url).then ((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factpara.innertext = data[0].text;
//     });
// }

// btn.addeventlistener("click",getfact);


// ...................................................................................


// requests & response ....

// http verbs 

// response status code 

// * http response headers also contain details about the 
// responses , such as content type , http status code etc . 


// information response : (100 - 199)
// successfull response : (200 - 299)
// redirecction message : (300 - 399)
// client error response : (400 - 499) 
// server error response : ( 500 - 599 )

// .............................................................................................



// .............. Finished !! ...............