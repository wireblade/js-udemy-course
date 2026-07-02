// string

const firstName = 'sara';

// number
const age = 30;
const temp = 98.9;

//boolean
const hasKids = true;

// Null
const aptNumber = null;

// undefined
// let score;
const score = undefined;

// symbol
const id = Symbol('id');


// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;

// reference types

const numbers = [1, 2, 3, 4, 5 ];

const person = {
    'firstName' : 'sara',
    'age' : 30,
    'hasKids' : true,
}

function sayHello() {
    console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);
