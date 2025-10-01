// Step 1: Define a common interface
interface ShippingStrategy {
  calculate(): number;
}

// Step 2: Implement concrete strategies
class StandardShipping implements ShippingStrategy {
  calculate(): number {
    return 50;
  }
}

class ExpressShipping implements ShippingStrategy {
  calculate(): number {
    return 100;
  }
}

// You can add new strategies without touching the existing ones
class OvernightShipping implements ShippingStrategy {
  calculate(): number {
    return 150;
  }
}

// Step 3: Shipping class uses strategy (no if/else needed)
class Shipping {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  calculate(): number {
    return this.strategy.calculate();
  }
}

// Usage
const standard = new Shipping(new StandardShipping());
console.log("Standard:", standard.calculate()); // 50

const express = new Shipping(new ExpressShipping());
console.log("Express:", express.calculate()); // 100

const overnight = new Shipping(new OvernightShipping());
console.log("Overnight:", overnight.calculate()); // 150
