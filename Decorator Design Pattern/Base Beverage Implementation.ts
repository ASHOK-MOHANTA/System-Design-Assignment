class Beverage{
    getDescription(){
        throw new Error("Gate description");
    }

    getCost(){
        throw new Error("Get Cost");
    }
}

class GreenTea extends Beverage{
    getDescription() {
        return "Green Tea";
    }

    getCost(){
        return 40 ;
    }
}

const tea = new GreenTea();
console.log(tea.getDescription());
console.log(tea.getCost());