// Abstract Class
abstract class Beverage {
  abstract getDescription(): string;
  abstract getCost(): number;
}

// ✅ GreenTea defined only once
class GreenTea extends Beverage {
  getDescription(): string {
    return "Green Tea";
  }

  getCost(): number {
    return 40;
  }
}

// Decorator Base Class
abstract class BeverageDecorator extends Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  abstract getDescription(): string;
  abstract getCost(): number;
}

// Concrete Decorator
class Sugar extends BeverageDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + " + Sugar";
  }

  getCost(): number {
    return this.beverage.getCost() + 10;
  }
}

// ✅ Test: Double Sugar
const tea = new Sugar(new Sugar(new GreenTea()));
console.log(tea.getDescription()); // Green Tea + Sugar + Sugar
console.log(tea.getCost());        // 60
