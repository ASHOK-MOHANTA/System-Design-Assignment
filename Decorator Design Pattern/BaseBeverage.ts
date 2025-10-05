export abstract class Beverage {
  abstract getDescription(): string;
  abstract getCost(): number;
}

export class GreenTea extends Beverage {
  getDescription(): string {
    return "Green Tea";
  }

  getCost(): number {
    return 40;
  }
}
