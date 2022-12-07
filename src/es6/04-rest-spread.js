// arrays destructuring

let fruit = ['Apple', 'Banana'];
let [a, b] = fruit;
console.log(a, fruit[1]);

// objet destructurig

let user = {usename: 'Oscar', age:34};
let {usename, age} = user;
console.log(usename, user.age);

//spread operator

let person = {name: 'Oscar', age:28};
let country = 'MX';

let data = {...person, country};
console.log(data);

//rest

function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3);
