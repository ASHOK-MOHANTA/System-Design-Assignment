
class State {
  insertCoin(machine) {
    console.log("Action not allowed in current state.");
  }

  selectItem(machine) {
    console.log("Action not allowed in current state.");
  }

  dispense(machine) {
    console.log("Action not allowed in current state.");
  }
}


class IdleState extends State {
  insertCoin(machine) {
    console.log("Coin inserted. Moving to Processing state...");
    machine.setState(new ProcessingState());
  }
}

// --- Processing State ---
class ProcessingState extends State {
  selectItem(machine) {
    console.log("Item selected. Moving to Dispensing state...");
    machine.setState(new DispensingState());
  }
}

// --- Dispensing State ---
class DispensingState extends State {
  dispense(machine) {
    console.log("Dispensing item... Returning to Idle state.");
    machine.setState(new IdleState());
  }
}

// --- Vending Machine Context ---
class VendingMachine {
  constructor() {
    this.state = new IdleState(); // Start in Idle
  }

  setState(state) {
    this.state = state;
  }

  insertCoin() {
    this.state.insertCoin(this);
  }

  selectItem() {
    this.state.selectItem(this);
  }

  dispense() {
    this.state.dispense(this);
  }
}

// --- Usage Example ---
const machine = new VendingMachine();

machine.insertCoin();  // Coin inserted -> Processing
machine.selectItem();  // Item selected -> Dispensing
machine.dispense();    // Dispensing -> Idle

console.log("\nTrying invalid actions:\n");
machine.selectItem();  // Not allowed in Idle
