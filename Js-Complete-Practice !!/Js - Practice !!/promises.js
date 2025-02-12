console.log('this is a promise');

let pro1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject ("no random number was not supporting you");
    }
    else{
     setTimeout(() => {
        console.log('yes i am done');
        resolve("avii");
     }, 3000);
    }
})
let pro2 = new Promise((resolve, reject) => {
    let a = Math.random();
if(a<0.5){
    reject ("no random number was not supporting you 2");
}
else{
 setTimeout(() => {
    console.log('yes i am done 2');
    resolve("avii2");
 }, 3000);
}
})

// pro1.then ((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

// let p3 = Promise.all([pro1,pro2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

// let p3 = Promise.allSettled([pro1,pro2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

let p3 = Promise.race([pro1,pro2])
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

