let x;

// Array literal
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'hello', true, null];

// Array constructor

const fruits = new Array('apple', 'grape', 'orange');


x = numbers[0];

x = numbers[0] + numbers[3];

x = `My Favorite fruits is ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

// fruits.length = 2;

fruits[3] = 'straw';

fruits[fruits.length] = 'blueberry';

x = fruits;

console.log(x);