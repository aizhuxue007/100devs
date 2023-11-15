//Create a dog object that has four properties and three methods
let dog = {}

dog.name = 'hotdog';
dog.color = 'yellow'
dog.breed = 'retriever'
dog.legs = 4
dog.run = function () {
    console.log('run')
}
dog.bark = function () {
    console.log('bark')
}
dog.sayName = function () {
    console.log(this.name)
}

dog.sayName()