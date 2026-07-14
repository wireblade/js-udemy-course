let x;

const arr = [34, 55, 95, 20, 15];

// add array on the end
// arr.push(100);

// remove end of array
// arr.pop();

// add array on the first
// arr.unshift(99);

// remove the first array
// arr.shift();

// arr.reverse();

x = arr.includes(21);

x = arr.indexOf(15);

x = arr.slice(1, 4);

// x = arr.splice(1, 4)

// x = arr.splice(1, 4)

x = arr.splice(1, 4).reverse().toString().charAt('1');

console.log(x);
