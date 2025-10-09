
class State {
  change(light) {
    console.log("Invalid transition.");
  }

  report() {
    console.log("Unknown state.");
  }
}


class RedState extends State {
  report() {
    console.log(" Red Light – Vehicles must STOP.");
  }

  change(light) {
    console.log("Changing from Red → Green");
    light.setState(new GreenState());
  }
}


class GreenState extends State {
  report() {
    console.log(" Green Light – Vehicles can MOVE.");
  }

  change(light) {
    console.log("Changing from Green → Yellow");
    light.setState(new YellowState());
  }
}

// --- Yellow State ---
class YellowState extends State {
  report() {
    console.log(" Yellow Light – Vehicles should SLOW DOWN.");
  }

  change(light) {
    console.log("Changing from Yellow → Red");
    light.setState(new RedState());
  }
}


class TrafficLight {
  constructor() {
    this.state = new RedState(); 
  }

  setState(state) {
    this.state = state;
  }

  report() {
    this.state.report();
  }

  change() {
    this.state.change(this);
  }
}


const light = new TrafficLight();


for (let i = 0; i < 6; i++) {
  light.report();
  light.change();
}
