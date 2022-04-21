const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon']

// fruits.splice(2,1)
fruits.splice( fruits.indexOf('Jambu'), 1 );

console.log(fruits)