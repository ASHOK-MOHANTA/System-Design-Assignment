// Abstract Class

abstract class Beverage{
    abstract getDescription(): string;
    abstract getCost(): Number;
}

//Concreat Class
class GreenTea extends Beverage{
    getDescription(): string {
        return "Green Tea"
    };

    getCost(): Number {
        return 40;
    }
}

// Decorator Base Class

abstract class BeverageDecorater extends Beverage{
    protected beverage : Beverage;

    constructor(beverage : Beverage){
        super();
        this.beverage = beverage;
    }
    abstract getDescription(): string;
    abstract getCost(): Number;
}

// class Decorator

class Sugar extends BeverageDecorater{
    getDescription(): string {
        return this.beverage.getDescription()+"+ Sugar";
    }
    getCost(): Number {
        return this.beverage.getCost();
    }
}

const tea = new Sugar(new GreenTea());
console.log(tea.getDescription()); 
console.log(tea.getCost());