// This values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
    name: 'brad',
    age: 30
}

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Bradley';
newPerson.age = 31;

console.log(name, newName);
console.log(person, newPerson);