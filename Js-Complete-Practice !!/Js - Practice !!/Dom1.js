let a = document.querySelector(".container").innerHTML;
console.log(a);

let b = document.querySelector(".container").innertext;
console.log(b);
b ="hey i am avii the developer";
console.log(b);

let c = document.querySelector(".container").outerHTML;
console.log(c);

let d = document.querySelector(".container").tagName;
console.log(d);

let e = document.querySelector(".container").nodeName;
console.log(e);

let f = document.querySelector(".container").textContent;
console.log(f);

let g = document.querySelector(".container").hidden;
console.log(g);

g = true ;
console.log(g);

let i = document.querySelector(".container").getAttribute("style");
console.log(i);

let j = document.querySelector(".container").setAttribute("style","background-color: red;");
console.log(j);

let k = document.querySelector(".container").attributes;
console.log(k);

let l = document.querySelector(".container").removeAttribute("style");
console.log(l);

//document.designMode = "on";  use for designing any browser by self....

let o = document.querySelector(".container").dataset;
console.log(o);

let div = document.createElement("div");
div.innerText = "i am inserted by avii ";
div.setAttribute("class", "created");
document.querySelector(".container").append(div); // insert item at last 
// document.querySelector(".container").prepend(div); // insert item at first
// document.querySelector(".container").before(div); // insert before the element 
// document.querySelector(".container").after(div); // insert after the element 

let p = document.querySelector(".container");
console.log(p);

p.insertAdjacentHTML("beforebegin", " hello i am inserted here "); // same for inerting text / elements methods ....

div.remove();

let q = document.querySelector(".container").classList;
q.add("avii");
console.log(q);
q.remove("avii");
console.log(q);
q.toggle("ram");
q.toggle("ram");  // for toggling any style property etc ;

let r = document.querySelector(".container").className;
console.log(r);









