// the old way
function myPlace() {
    console.log('bangalore')
};
myPlace();

// new way
const myNewPlace = (address) => {
    console.log(address)
}
myNewPlace('Chennai');

// to return a function
const multiply = number => {
    return number * 2
}
console.log(multiply(4));

// single line return the method
const addition = number => number + 3;
console.log(addition(3));

// without passing any argument 
const simpleMethod = () => {
    console.log('simpleMethod')
}
simpleMethod();