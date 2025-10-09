 
class State {
  play(player) {
    console.log("Action not allowed in current state.");
  }

  pause(player) {
    console.log("Action not allowed in current state.");
  }

  stop(player) {
    console.log("Action not allowed in current state.");
  }
}

 
class PlayState extends State {
  play(player) {
    console.log("Already playing media.");
  }

  pause(player) {
    console.log("Pausing media...");
    player.setState(new PauseState());
  }

  stop(player) {
    console.log("Stopping media...");
    player.setState(new StopState());
  }
}

 
class PauseState extends State {
  play(player) {
    console.log("Resuming media...");
    player.setState(new PlayState());
  }

  pause(player) {
    console.log("Already paused.");
  }

  stop(player) {
    console.log("Stopping media from pause...");
    player.setState(new StopState());
  }
}

 
class StopState extends State {
  play(player) {
    console.log("Starting media from beginning...");
    player.setState(new PlayState());
  }

  pause(player) {
    console.log("Can't pause. Media is stopped.");
  }

  stop(player) {
    console.log("Already stopped.");
  }
}

 
class MediaPlayer {
  constructor() {
    this.state = new StopState(); // Initial state
  }

  setState(state) {
    this.state = state;
  }

  play() {
    this.state.play(this);
  }

  pause() {
    this.state.pause(this);
  }

  stop() {
    this.state.stop(this);
  }
}
 
const player = new MediaPlayer();

player.play();   
player.pause();   
player.play();    
player.stop();   
player.pause();   
player.stop();    
