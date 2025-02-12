// async function getdata(){
// return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(455)
//     },3500);
// })
// }


async function getdata(){
    //simulate getting data from a server,
//let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

let x = await fetch('https://jsonplaceholder.typicode.com/posts',{
method : 'post',
body : JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId:1,
}),
Headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
let data = await x.json();
// console.log(data);
return data;
// .then(Response => Response.json())
// .then (json => console.log(json))
// console.log(x);
// return 455;
    }

// console.log('loading modules');

// console.log('do somthing else');

// console.log('load data');
// let data = getdata()
// console.log(data);
// console.log('process data');

// console.log('task2');

async function main(){
console.log('loading modules');

console.log('do somthing else');

console.log('load data');
let data = await getdata()
console.log(data);
console.log('process data');

console.log('task2');
}

main();

// let data = getdata()
// data.then((v)=>{

// console.log(data);
// console.log('process data');

// console.log('task2');

// })


