const library = [
    {
        title: 'Snap out of it',
        author: 'bill4T',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    
    {
        title: 'Only i can go',
        author: 'zeroDazon',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },

    {
        title: 'When someone go',
        author: 'beatles',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true; 

const [
        {
        title: firstBook,
    } 
] = library;

// const {
//     title: firstBook
// } = library[1];

console.log(firstBook);

const str = JSON.stringify(library);

console.log(str);