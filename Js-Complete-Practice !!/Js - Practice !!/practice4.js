
// let rand = Math.floor(Math.random()*7)+1;
// let rand1= Math.floor(Math.random()*7)+1;

// let obj = {
//     1 : "red",
//     2 : "yellow",
//     3 : "green",
//     4 : "pink",
//     5 : "orange",
//     6 : "blue",
//     7 : "lightblue",
// }

// let a = document.querySelectorAll(".box").forEach(e =>{
//     console.log(e);
//     e.style.backgroundColor = obj[rand];
//     e.style.color = obj[rand1];
// });


// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// or 

// let boxes = document.querySelector(".container").children;

// function getcolor(){
//     let val1 = Math.ceil(Math.random()*255);
//     let val2 = Math.ceil(Math.random()*255);
//     let val3 = Math.ceil(Math.random()*255);
//     return `rgb(${val1},${val2},${val3})`;
// }

// Array.from(boxes).forEach (e =>{
//     e.style.backgroundColor = getcolor();
//     e.style.color = getcolor();
// });

// MATHE ceil is used for coverting float value to integer value in next big value ex - 4.0044 = 5;

// function getRandomColor() {
//     var red = Math.floor(Math.random() * 256);
//     var green = Math.floor(Math.random() * 256);
//     var blue = Math.floor(Math.random() * 256);
  
//     var maincolor =
//       "#" + red.toString(16) + green.toString(16) + blue.toString(16);
//     return maincolor;
//   }
//   document.querySelectorAll(".box").forEach((e) => {
//     e.style.backgroundColor = getRandomColor();
//     e.style.color = getRandomColor();
//   });

let boxes = document.querySelectorAll(".box");

        for (var i = 0; i < boxes.length; i++) {
            let box = boxes[i];

            // Generate random color (16777215 is White in Decimal)
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

            // Generate random background color
            let randomBackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

            // Assign random color and background
            box.style.color = randomColor;
            box.style.backgroundColor = randomBackgroundColor;

            // Set content to show color code
            box.textContent = randomColor;
        }

        