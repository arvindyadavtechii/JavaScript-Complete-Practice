// document.body.firstElementChild;
// document.body.firstElementChild.childNodes;
// document.body.firstElementChild.children;

// document.body.firstElementChild.children[0];
// document.body.firstElementChild.children[1];
// document.body.firstElementChild.children[2];

// document.body.firstElementChild.children[2].nextElementSibling;
// document.body.firstElementChild.children[2].previousElementSibling;
// document.body.firstElementChild.children[2].nextSibling;

// let a = document.getElementsByClassName("box");
// console.log(a);
// document.getElementsByClassName("box");
// console.log(a[0]);

// let b = document.getElementById("yes");
// console.log(b);
// b.style.backgroundColor = "red";

// let c = document.querySelector (".box");  // use for single element .
// console.log(c);

// c.style.backgroundColor = "blue";

// let d = document.querySelectorAll (".box").forEach(e => {   // use for multiple element .
//     console.log(e);
//     e.style.backgroundColor = "yellow";
// });

let e = document.getElementsByTagName ("div");
console.log(e);

e[1].matches("#yes");
console.log (e[1].matches("#yes"));

e[1].closest("#yes");
console.log (e[1].closest("#yes"));

// or 

e[1].closest(".container");
console.log (e[1].closest(".container"));

let f = document.querySelector(".container").contains(e[1]);
console.log(f);

// or 


let g = document.querySelector(".container").contains(document.querySelector("body"));
console.log(g);




