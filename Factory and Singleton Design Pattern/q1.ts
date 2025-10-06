// Vehicle interface
interface Vehicle {
  name: string;
  getDetails(): string;
}

// Bike class
class Bike implements Vehicle {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getDetails(): string {
    return `Bike: ${this.name}`;
  }
}

// Car class
class Car implements Vehicle {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getDetails(): string {
    return `Car: ${this.name}`;
  }
}

// VehicleFactory
class VehicleFactory {
  static createVehicle(type: string, name: string): Vehicle {
    switch (type) {
      case "Bike":
        return new Bike(name);
      case "Car":
        return new Car(name);
      default:
        throw new Error("Invalid vehicle type");
    }
  }
}

// Usage
const myBike = VehicleFactory.createVehicle("Bike", "Yamaha");
console.log(myBike.getDetails()); // Bike: Yamaha

const myCar = VehicleFactory.createVehicle("Car", "Toyota");
console.log(myCar.getDetails()); // Car: Toyota
