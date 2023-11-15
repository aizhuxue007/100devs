//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

class Skater{
    constructor(skaterName, skaterColor, skateBoard, skaterAge) {
        this.name = skaterName;
        this.skinColor = skaterColor;
        this.skateBoardBrand = skateBoard;
        this.age = skaterAge;
    }

    ollie() {
        console.log(`${this.skateBoardBrand} jumped`)
    }
    
    yellName() {
        console.log(`${this.name} says hi`)
    }
    
    kickflip() {
        console.log(`350 flips`)
    }
}

const tony = new Skater('tony', 'white', 'platypus', 61)

tony.ollie()
tony.yellName()
tony.kickflip()
