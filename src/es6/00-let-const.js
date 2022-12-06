// DECLARAR Y ASIGNAR VARIABLE
var lastName = 'David';

// REASIGNAR VARIABLE
lastName = 'Oscar';
console.log(lastName)

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit)

const animal = 'dog';
animal = 'cat';
console.log(animal)

const fruits = () => {
    if(true) {
var fruit1 = 'Apple';//funtion scope
let fruit2 = 'Kiwi';//block scope
const fruit3 = 'banana';//block scope
    }
}
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

fruits()