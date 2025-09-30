class PolyDuck{
    fly():void{
        console.log("Duck is flying...")
    }
}

class DesiDuck extends PolyDuck{
    fly():void{
        console.log("DesiDuck flies at 10kmph")
    }
}

class videsiDuck extends PolyDuck{
    fly(): void {
        console.log("VidesiDuck flies at 20kmph")
    }
}

class SmartDuck extends PolyDuck{
    fly(): void {
        console.log("Smart Duck Can Fly at 50kmph")
    }
}

function makeDuckFly(duck : PolyDuck):void{
    duck.fly();
}

const desi = new DesiDuck();
const videsi = new videsiDuck();
const smart = new SmartDuck();

makeDuckFly(desi);
makeDuckFly(videsi);
makeDuckFly(smart);

class User{
    public name: string;
    private orgcode:string = "DuckCorp";
    protected role : string;

    constructor(name:string,role:string){
        this.name;
        this.role;
    }
    introduce():void{
        console.log(`I am ${this.name} from ${this.orgcode}`);
    }
}

class Manager extends User{
    getRole(): void{
        console.log(this.role);
    }
}

// Test Q5

const user = new User("Daffy","User");
user.introduce();

const manager = new Manager("Ashok"," Manager");
manager.introduce();
manager.getRole();

