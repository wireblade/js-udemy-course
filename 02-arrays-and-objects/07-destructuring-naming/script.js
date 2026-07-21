const firstName = 'John';
const lastName = 'Doe';
const age = '30';

const person = {
    firstName,
    lastName,
    age,
}

console.log(person.age);


function capitalize(){
    return title.split(' ').map(word => {return word.charAt(0).toUpperCase() + word.slice(1)}).join(' ');
}


// Destructuring

const todo = {
    id: 1,
    title: 'take out trash',
    user: {
        name: 'john',
    },
};

const {
    id: todoId,
    title: todoTitle,
    user: { name },
} = todo;


console.log(name);

// Destructure Arrays
const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);