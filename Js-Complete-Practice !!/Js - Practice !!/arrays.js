// let a = [1,2,3,4,5,6];
// let b = [2,3,4,5,5];

// console.log(a);

// console.log(a.length);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

// //array is mutable 

//  a[0] = 44;
 

//  // methods of array

//  console.log(a, typeof a);
//  console.log(a.toString());
//  console.log(a.join("and"));
//  console.log(a.pop()); // return pop array element 
//  console.log(a);
//  console.log(a.push("90"));
//  console.log(a);
//  console.log(a.push("avii"));
//  console.log(a.shift());
//  console.log(a);
//  console.log(a.unshift());
//  console.log(a);
//  delete a[3];
//  a.length;
//  console.log(a[3]);
//  console.log(a.concat(b));

//  console.log(a.sort());
//  console.log(a.splice(1,2,77,88));
//  console.log(a);

//  console.log(a.slice(2));
//  console.log(a.slice(1,2));
//  console.log(a.reverse());



//  let x = [1,3,3,4,6,4,7,8];

//  for (let index = 0; index < x.length; index++) {
//     const element = x[index];
//     console.log(element);
//  }

//  a.forEach((value, index,arr) => {
//     console.log(value,index,arr);
//  });

// let obj = {
//     1:"aman",
//     2:"yash",
//     3:"arav",
// }

//  for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element);
//         console.log(key,element);
        
//     }
//  }

//  for (const value of a) {
//     console.log(value);
//  }


// // map in array 

// let arr = [2,6,77,98,22];
// let arrnew = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     arrnew.push(element**2);
    
// }

// console.log (arrnew);

// let arrnew = arr.map((e)=>{
//     return e**2
// })

// console.log(arrnew);

// greatnew = [2 ,44 ,55 ,66,77];
// const greater = (e) =>{
//     if(e>7){
//         return true;
//     }
//     return false ;
// }

// console.log(greatnew.filter(greater));

// arr2 =[1,4,5,3,5,5,4];

// const gi = (a,b) => {
//     return a*b;
// }

// console.log(arr2.reduce(gi));

