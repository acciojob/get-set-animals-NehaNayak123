// //complete this code
// class Animal {}

// class Dog extends Animal {}

// class Cat extends Animal {}

// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;
// //////////////////////////////////
//complete this code
// Base Animal class
class Animal {
    constructor(species) {
        this._species = species; // Store species in a private variable
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to log the animal sound message
    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Cat class inheriting from Animal
class Cat extends Animal {
    constructor(species) {
        super(species); // Call the Animal constructor
    }

    // Method to log "purr"
    purr() {
        console.log("purr");
    }
}

// Dog class inheriting from Animal
class Dog extends Animal {
    constructor(species) {
        super(species); // Call the Animal constructor
    }

    // Method to log "woof"
    bark() {
        console.log("woof");
    }
}
// class Animal {
// 	constructor(species){
// 		this.species=species
// 	}
// 	getSpecies() {
//         return this.species;
//     }
// 	makeSound(){
// 		// console.log(`The ${this.species} makes a sound`)
// 		console.log(`The ${species()} makes a sound`)
// 	}
// }

// class Dog extends Animal {
// 	constructor(species){
// 		super(species)
// 	}
// 	bark(){
// 		console.log("woof")
// 	}
// }

// class Cat extends Animal {
// 	constructor(species){
// 		super(species)
// 	}
// 	purr(){
// 		console.log("purr")
// 	}
// }

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;





