// Base abstraction for all birds
abstract class Bird {
  abstract display(): void;
}

// Separate interface for flying ability
interface Flyable {
  fly(): void;
}

// Flying birds implement Flyable
class Sparrow extends Bird implements Flyable {
  display(): void {
    console.log("I'm a Sparrow");
  }

  fly(): void {
    console.log("Flying...");
  }
}


class Ostrich extends Bird {
  display(): void {
    console.log("I'm an Ostrich");
  }
}
