type CharecterType = "Worrior" | "Archer" | "Mage";

interface Icharacter{
    name: string;
    getSheet():string;
}

// Warrior

class Warrior implements Icharacter{
    name: string;
    private strength:number;
    private defence:number;

    constructor(name:string){
        this.name = name;
        this.strength = 90;
        this.defence = 80;
    }

    getSheet(): string {
        return `Warrior ${this.name} - Strength: ${this.strength}, Defense: ${this.defense}`;
    }
}

// Archer

class Archer implements Icharacter {
  name: string;
  private agility: number;
  private strength: number;

  constructor(name: string) {
    this.name = name;
    this.agility = 80;
    this.strength = 40;
  }

  getStats(): string {
    return `Archer ${this.name} - Agility: ${this.agility}, Strength: ${this.strength}`;
  }
}

// Mage
class Mage implements Icharacter {
  name: string;
  private intelligence: number;
  private mana: number;

  constructor(name: string) {
    this.name = name;
    this.intelligence = 90;
    this.mana = 100;
  }

  getStats(): string {
    return `Mage ${this.name} - Intelligence: ${this.intelligence}, Mana: ${this.mana}`;
  }
}

// Factory
class CharacterFactory {
  static createCharacter(type: CharacterType, name: string): Icharacter {
    switch (type) {
      case "Warrior":
        return new Warrior(name);
      case "Archer":
        return new Archer(name);
      case "Mage":
        return new Mage(name);
      default:
        throw new Error("Unknown Character Type");
    }
  }
}

// ✅ Usage
const archer = CharacterFactory.createCharacter("Archer", "Eldrin");
console.log(archer.getStats());
// Archer Eldrin - Agility: 80, Strength: 40

const mage = CharacterFactory.createCharacter("Mage", "Gandalf");
console.log(mage.getStats());
// Mage Gandalf - Intelligence: 90, Mana: 100

const warrior = CharacterFactory.createCharacter("Warrior", "Thorin");
console.log(warrior.getStats());