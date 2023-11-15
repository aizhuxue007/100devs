// Hello, object
const user = {};

user.name = 'John';
console.log(user.name)
user.surname = 'Smith';
user.name = 'Pete';
console.log(user.name)
delete user.name;
console.log(user.name)

// Check for emptiness
let schedule = {};

function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let total = Object.keys(salaries).reduce((acc, curr) => acc + salaries[curr], 0)

console.log(total);

// Multiply numeric property values by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu);