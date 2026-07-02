// console.log(100);

// console.log('Hello World');

// console.log(20, 'Hello', true);

const x = 100;

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('error');
console.table({
    name: 'bill',
    email: 'bill@gmail.com',
});
console.groupEnd();

const styles = 'padding: 10px; background-color:white; color: green;' 

console.log('%chello world', styles);

for(var i = 0; i < 3; i++) {
    setTimeout(()=> {
        console.log(i);
    }, 100);
}
