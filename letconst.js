// var in old js
var name = 'savari devan';
console.log(name);

name = 'sagaya devan';
console.log(name);
// var is deprecated

let myName = 'savari devan s';
console.log(myName);

myName = 'Nimal Raj';
console.log(myName);
// we use it where value varies

const yourName = 'Devan';
console.log(yourName);

// yourName = 'Sagaya';
// console.log(yourName);
// in this case it will throw error => assignement to a constant variable

// but const for object
const array = { name: 'savari' };
console.log(array)
array.name = 'June';
console.log(array);
// using method we can immute the values of object or array