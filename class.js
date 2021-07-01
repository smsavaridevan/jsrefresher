// old way
class Address {
    constructor() {
        this.address = 'Bangalore'
    }

    printAddress() {
        console.log(this.address)
    }
}

class Person extends Address {
    constructor() {
        super()
        this.name = 'Deva S'
    }

    printPerson() {
        console.log(this.name)
    }
}

const person = new Person();
person.printPerson();
person.printAddress();