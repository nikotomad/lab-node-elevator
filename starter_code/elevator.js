class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = 'Up';
  }

  start() {
    var e = setInterval(() => {
      this.update();
    }, 500);
  }

  stop() {
    console.log('update stopped');
    clearInterval(e);
  }

  update() {
    this.log();
    if(this.floor < this.MAXFLOOR && this.direction == 'Up'){
      this.floorUp();
    } else {
      if(this.floor == 0){
        this.floorUp();
      }
      else {
        this.floorDown();
      }
    }
  }

  _passengersEnter() { }

  _passengersLeave() { }

  floorUp() {
    this.direction = 'Up';
    this.floor += 1;
  }

  floorDown() {
    this.direction = 'Down';
    this.floor -= 1;
  }

  call() { }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
