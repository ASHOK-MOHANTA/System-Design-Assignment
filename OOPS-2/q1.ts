// Question-1

class Duck{
    swim():void {
        console.log("I Know Swiming..")
    }
}

class MallerDuck extends Duck{}

const mallard = new MallerDuck();
mallard.swim();

// Question-2

class Birds{
    fly ():void{
        console.log("I Can fly");
    }
}

class Penguin extends Birds{
    fly():void{
        console.log("I Can't fly");
    }
}

const bird  = new Birds();
bird.fly();

const penguin = new Penguin();
penguin.fly()


// Question-3

interface IDuck {
  swim(): void;
  fly(): void;
  sound(): void;
}

class ToyDuck implements IDuck {
  swim(): void {
    console.log("Can float on water");
  }
  fly(): void {
    console.log("Cannot fly");
  }
  sound(): void {
    console.log("Cannot sound");
  }
}


const toDuck = new ToyDuck();
toDuck.fly();
toDuck.sound();
toDuck.swim();