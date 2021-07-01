// primitive variables for numbers, string, boolean
const a = 1;
const b = a;
console.log(b)

// reference variables for object and arrays
const nperson = {
    name: 'savari'
}
const newPerson = {
    ...nperson
};

nperson.name = 'saga'

console.log(nperson)