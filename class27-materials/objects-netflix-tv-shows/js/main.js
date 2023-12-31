//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixShow {
    constructor(name, cast, year, genre) {
        this.name = name;
        this.cast = cast;
        this.year = year;
        this.genre = genre;
    }

    watch() {
        console.log(`You are watching ${this.name}`)
    }
    nextShow() {
        console.log(`You are watching next show in queue`)
    }
    showGenre() {
        console.log(`You are watching ${this.genre}`)
    }
}

const newShow = new MakeNetflixShow('New black', ['jerry springs'], '2023', 'comedy')

console.log(newShow.showGenre());