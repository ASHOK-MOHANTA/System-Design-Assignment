// Base abstract Product
abstract class Product {
  constructor(public name: string, public price: number) {}
  abstract getDescription(): string;
}

// Concrete Products
class Laptop extends Product {
  getDescription(): string {
    return `Laptop: ${this.name}, Price: $${this.price}`;
  }
}

class Mobile extends Product {
  getDescription(): string {
    return `Mobile: ${this.name}, Price: $${this.price}`;
  }
}

class Tablet extends Product {
  getDescription(): string {
    return `Tablet: ${this.name}, Price: $${this.price}`;
  }
}

// Strategy Constructor Type
type ProductConstructor = new (name: string, price: number) => Product;

// Pluggable Class Map (configurable registry)
const productMap: Record<string, ProductConstructor> = {
  Laptop,
  Mobile,
  Tablet,
};

// Factory
class ProductFactory {
  static createProduct(type: string, name: string, price: number): Product {
    const ProductClass = productMap[type];
    if (!ProductClass) {
      throw new Error(`Unknown product type: ${type}`);
    }
    return new ProductClass(name, price);
  }

  // 🔹 Allow dynamic registration of new product types
  static registerProduct(type: string, ctor: ProductConstructor): void {
    productMap[type] = ctor;
  }
}

// Usage
const t = ProductFactory.createProduct("Tablet", "Galaxy Tab", 1100);
console.log(t.getDescription());
// Output: Tablet: Galaxy Tab, Price: $1100

// Adding new product dynamically without modifying factory
class SmartWatch extends Product {
  getDescription(): string {
    return `SmartWatch: ${this.name}, Price: $${this.price}`;
  }
}

// Register dynamically
ProductFactory.registerProduct("SmartWatch", SmartWatch);

const sw = ProductFactory.createProduct("SmartWatch", "Apple Watch", 800);
console.log(sw.getDescription());
// Output: SmartWatch: Apple Watch, Price: $800
