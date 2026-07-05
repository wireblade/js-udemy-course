let x;

const name = 'john';
const age = 31;

x = 'hello, my is ' + name + ' and I am ' + age + ' years old.';

// Template Literals

x = `Hello , my name is ${name} and i am ${age} years old`;

// Strings Properties and Methods

const s = new String('hello world');

x = typeof s;

x = s.length;

// Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('d');

x = s.substring(0, 4);

x = s.substring(7);

x = s.slice(-11, -6 );

x = '     Hello Word';

x = x.trim();

x = s.replace('world', 'John');

x = s.includes('hell');

x = s.valueOf();

x = s.split('');

console.log(x);