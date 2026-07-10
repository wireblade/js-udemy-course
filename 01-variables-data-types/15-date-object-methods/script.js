let x;
let d = new Date();

x = d.toString();

x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate(); // get day of the month 
x = d.getDay(); // get day of the week

x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);
x = d.toLocaleDateString('default', {month: 'short'});

x = d.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/Manila',
});

console.log(x);