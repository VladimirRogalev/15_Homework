//id;firstName;lastName;age
// 333333, Vladimir, Rogalev, 30

let index = 1;

const persons = [];

while (true) {
    let inputData = prompt(`${index}) Enter your person data separate by ","`);
    if (inputData === null) {
        break;
    }
     let res = inputData.split(', ');
    if (res.length !== 4 || inputData.trim() === '') {
        alert('Please enter person data as in the example');
    } else {
        const person = new Person(res[0], res [1], res[2], res[3]);
        persons.push(person);
        index++;
    }
}
console.log(persons);

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}