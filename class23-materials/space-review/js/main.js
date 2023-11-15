//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numbers = [1, 2, 3, 4, 5, 6]

alert(numbers.reduce((acc, curr) => acc + curr), 0)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squaredArray(arr) {
    return arr.map(x => x * x) 
}

console.log(squaredArray(numbers));

//Create a function that takes string
//Print the reverse of that string to the console
function printReverse(str) {
    let length = str.split('').length;
    let strArray = str.split('');
    for (let i = length - 1; i >= 0; i--) {
        console.log(strArray[i]);
    }
}

printReverse('hotdog');

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkPalidrome(str) {
    let array = str.split('');
    let length = array.length;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[length - (1 + i)]) {
            return false
        }
    }
    return true;
}

console.log(checkPalidrome('racecar'))