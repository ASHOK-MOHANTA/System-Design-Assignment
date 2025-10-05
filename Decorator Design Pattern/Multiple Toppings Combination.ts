import { Beverage, GreenTea } from "./BaseBeverage";

abstract class BeverageDecorater extends Beverage{
    protected beberage : Beverage;

    constructor(beverage:Beverage){
        super();
        this.beberage = beverage;
    }

    abstract getDescription(): string;
    abstract getCost(): number;
}

class Sugar extends BeverageDecorater{
    getDescription(): string {
        return this.beberage.getDescription() + "+Sugar";
    }
    getCost(): number {
        return this.beberage.getCost()+ 10;
    }
}

class Honey extends BeverageDecorater{
    getDescription(): string {
        return this.beberage.getDescription() + "+ Honey"
    }
    getCost(): number {
        return this.beberage.getCost() + 20;
    }
}

const tea = new Honey(new Sugar(new GreenTea()));

console.log(tea.getDescription());
console.log(tea.getCost());
