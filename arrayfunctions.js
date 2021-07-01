// concat it does not change the existing array instead creates new array
const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];
const children = hege.concat(stale);
console.log(children);
// we can also concat three arrays
const newArr = hege.concat(stale, children);
console.log(newArr)

// copywithin
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
fruits.copyWithin(2, 1, 2);
console.log(fruits);

// every

const ages = [32, 33, 16, 40];

const checkAdult = (age) => {
    return age > 18
}
ages.every(checkAdult);

// for array obj
const ageArrObj = [{ name: 'sav', age: 25 }, { name: 'jack', age: 20 }, { name: 'jun', age: 19 }, { name: 'March', age: 18 }];
const checkAdultArrObj = (arr) => {
    return arr.age > 18
}
ageArrObj.every(checkAdultArrObj)