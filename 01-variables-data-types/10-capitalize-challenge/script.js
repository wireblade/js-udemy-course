// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

// const myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

// const myNewString = myString[0].toUpperCase() + myString.substring(1);


// const myNewString = `${myString.charAt(0).toUpperCase()}${myString.slice(1)}`;


// console.log(myNewString);


let mySentence = 'i am a developer';

// const capitalized = mySentence.split('')
// .map(word => {
//   return word.charAt(0).toUpperCase + word.slice(1);
// })
// .join(' ');


// const capitalized = mySentence.split(' ')
// .map(word => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// })
// .join(' ');

const capitalized = mySentence.split(' ')
.map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1)
})
.join(' ');




console.log(capitalized);