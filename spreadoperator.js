const arr = [1, 2, 3, 4];
newArr = [...arr, 5]; // arr is to spread the array elements
console.log(newArr)

const obj = {
    name: 'savari',
    address: 'Bangalore'
}

const newobj = {
    ...obj, // this is to spread the object key and values
    age: 25
}
console.log(newobj)

// rest operator will be used when passing the arguments in the functionc
const filter = (...arr) => {
    return arr.filter(item => item === 1);
}
console.log(filter(1, 2, 3));