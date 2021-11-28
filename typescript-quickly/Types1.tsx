// Simple types

let myName : string = "Hello";
let sleeping : boolean = false;

console.log("myName = " + myName);
console.log("sleeping = " + sleeping);

const userId = Symbol("UserID");

const user = {
    userId: 1234
}

console.log(user['userId']);
