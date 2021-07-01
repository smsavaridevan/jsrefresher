class NewAddress {
    address = 'Neelasandra';
    printAddress = () => {
        console.log(this.address)
    }
}

class NewPerson extends NewAddress {
    name = 'Arun';

    printPerson = () => {
        console.log(this.name)
    }
}

const newperson = new NewPerson();
newperson.printPerson();
newperson.printAddress()