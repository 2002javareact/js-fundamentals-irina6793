/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let info = {
    name: 'irina',
    age: 28
}
console.log(info.name, info.age);

function info(name, age) {
    this.name=name;
    this.age=age;
}
let contact = new info("dasha", 24);
console.log(contact.name, contact.age);

class info {
    constructor(name, age) {
        this.name=name
        this.age=age
    }
    let contacts = new info ('galina', 56)
    console.log(contacts.name, contacts.age)
}