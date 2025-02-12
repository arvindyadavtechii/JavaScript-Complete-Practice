// asyncronous nature of js 

// console.log("first");
// console.log("second");

// setTimeout(() => {
//     console.log("fifth");
// }, 1000);

// setTimeout(() => {
//     console.log("sixth");
// }, 0);

// console.log("third");
// console.log("fourth");

const fn = () =>{
    console.log("nothing");          // when multiple callback function crated inside another call back then callback hell problem occured;
}

const callback = (arg , fn ) =>{
    console.log(arg);
    fn();
}
const loadscript = (src , callback) => {
  let sc = document.createElement("script");
  sc.src = src ;                                    
  sc.onload = callback("avii" , fn);
  document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);


