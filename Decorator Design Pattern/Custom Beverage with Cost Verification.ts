import { Beverage, GreenTea } from "./BaseBeverage";

class coffee extends Beverage{
    getDescription(): string {
        return "coffee"
    }
    getCost(): number {
        return 50;
    }
}

// Decorator base classes 

abstract class BeverageDecorater extends Beverage{
    protected beverage : Beverage;

    constructor(beverage : Beverage){
        super();
        this.beverage = beverage;
    }

    abstract getDescription(): string;
    abstract getCost(): number;
}

// sugar toping

class Sugar extends BeverageDecorater{
    getDescription(): string {
        return this.beverage.getDescription() + "Sugar";
    }
    getCost(): number {
        return this.beverage.getCost()+ 10;
    }
}

// Honey Toping

class Honey extends BeverageDecorater{
    getDescription(): string {
        return this.beverage.getDescription() + "+ Honey";
    }
    getCost(): number {
        return this.beverage.getCost() + 20;
    }
};

// WippedCream Topping

class WippedCream extends BeverageDecorater{
    getDescription(): string {
        return this.beverage.getDescription() + "WippedCream";
    }
    getCost(): number {
        return this.beverage.getCost() + 15;
    }
}

const myDrink = new WippedCream(new Honey(new Sugar(new coffee())))

console.log(myDrink.getDescription());
console.log(myDrink.getCost());
