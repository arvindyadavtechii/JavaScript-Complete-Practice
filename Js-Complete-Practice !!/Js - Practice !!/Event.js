let button = document.getElementById("btn");

// button.addEventListener("click" , ()=>{
//     document.querySelector(".box").innerHTML= "<b> hello its clicked </b>";
// });

// button.addEventListener("dblclick",()=>{
//     document.querySelector(".box").innerHTML = "<b>hello it dbl clicked</b>";
// });

// button.addEventListener("contextmenu",()=>{
//     alert("you clicked wrong !!!! ");
// });

// button.addEventListener("keydown",(e)=>{      //in this function second object takes second object as object
//     console.log(e);   
// });

// button.addEventListener("keydown",(e)=>{      //in this function second object takes second object as object
//     console.log(e.key , e.keyCode);   
// });


// event bubbling in js 

document.querySelector(".child").addEventListener("click", (e)=>{
    e.stopPropagation();                            // stopprogration use for stopping bubbling events 

    alert ("child was clicked");
});

document.querySelector(".childcontainer").addEventListener("click", (e)=>{
    e.stopPropagation();
    alert ("child  container was clicked");
});

document.querySelector(".container").addEventListener("click", (e)=>{
    e.stopPropagation();
    alert ("div container was clicked");
});

function getcolor(){
    let val1 = Math.ceil(Math.random()*255);
    let val2 = Math.ceil(Math.random()*255);
    let val3 = Math.ceil(Math.random()*255);
    return `rgb(${val1},${val2},${val3})`;
}
            
let a = setInterval(()=>{
    document.querySelector("#btn").style.backgroundColor = getcolor();
},1000);

console.log(a);

// we can use cleartimeout(1);

