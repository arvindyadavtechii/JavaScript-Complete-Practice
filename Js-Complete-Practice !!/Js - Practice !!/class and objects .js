// // let obj = {
// //     a : 1,
// //     b : "harry",
// // }

// // console.log(obj);

// // let animal = {
// //     eats : true ,
// // };

// // let rabbit = {
// //     jumps : true,
// // };

// // rabbit.__proto__ = animal; //sets rabbit.[[prototype]] = animal;

// class animal{
//     constructor(name){
//         this.name = name;
//         console.log("object is created ....");
//     }
//     eats(){
//         console.log("kha raha hu ...");
//     }
//     jump(){
//         console.log("kudd raha hu ...");
//     }
// }

// let a = new animal("bunny");
// console.log(a);

// class lion extends animal{
//     constructor(name){
//         super(name);
//         console.log("object is created"); 
//     }

//     eats(){
//         super.eats()
//         console.log("kha raha hu ...");
//     }
// }
// let l = new lion("king");
// console.log(l);

class user {
    constructor (name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let User = new user ("john");
console.log(User.name);

User.name = "aviii";// user = new user("");// name is too short
console.log (User);