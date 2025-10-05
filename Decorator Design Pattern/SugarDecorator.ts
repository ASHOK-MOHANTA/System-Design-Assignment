import { Beverage, GreenTea } from "./BaseBeverage";

abstract class BeverageDecorator extends Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  abstract getDescription(): string;
  abstract getCost(): number;
}

class Sugar extends BeverageDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + " + Sugar";
  }

  getCost(): number {
    return this.beverage.getCost() + 10;
  }
}

// ✅ Test
const tea = new Sugar(new Sugar(new GreenTea()));
console.log(tea.getDescription()); // Green Tea + Sugar + Sugar
console.log(tea.getCost());        // 60
