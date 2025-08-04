import { afterEach } from "node:test";

console.log("Hello World !");
console.log("Hello Gaurav !");
let age = 23; 
let notAssigned= null;
console.log("undifined:",notAssigned);

let sym1 = Symbol();
console.log(sym1);

let sym2 = Symbol("description");


let a = Symbol("id");
let b = Symbol("id");
console.log(a == b);

while (age < 30) {
  console.log("Age is less than 30");
  age++;
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log("Number:", number);
});