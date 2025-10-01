class Animal {
  makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}

// Function demonstrating polymorphism
function makeAnimalSound(animal: Animal): void {
  animal.makeSound();
}

// Usage
const genericAnimal = new Animal();
const dog = new Dog();

makeAnimalSound(genericAnimal); // Output: Some sound
makeAnimalSound(dog);           // Output: Bark!
