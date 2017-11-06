class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.direction = 'Up';
    this.requests   = []; // Pending floor requests to stop at
    this.waitingList = []; // People waiting for the elevator to come after their request
    this.passengers = []; // Currently inside elevator
  }

  start(passenger) {
    this.interval = setInterval(() => {
      this.update(passenger);
    }, 750);
  }

  stop() {
    clearInterval(this.interval);
  }

  update(passenger) {
    this.log();
    this.checkLimits();
    this._passengersEnter(passenger);
    this._passengersLeave(passenger);
  }

  checkLimits() {
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

  _passengersEnter(passenger) {
    for(var i = 0; i < this.waitingList.length; i++){
      if(this.waitingList[i].originFloor == this.floor){
        this.passengers.push(passenger); // add the person into the passengers array
        this.waitingList.pop(passenger); // delete the passenger from the waitingList
        this.requests.push(passenger.destinationFloor)// Add the destination floor of the passenger to the elevator requests
        console.log(`-> ${passenger.name} has entered the elevator. `); // We will show a message to indicate what just happens:
      }
    }
  }

  _passengersLeave(passenger) {
    for(var i = 0; i < this.passengers.length; i++){
      if(this.passengers[i].destinationFloor == this.floor){
        this.passengers.pop(this.passengers[i]); // we will delete that person from the passengers array.
        console.log(`<- ${passenger.name} has left the elevator. `); // We will show a message to indicate what just happens:
      }
    }
  }

  floorUp() {
    this.direction = 'Up';
    this.floor += 1;
  }

  floorDown() {
    this.direction = 'Down';
    this.floor -= 1;
  }

  call(passenger) { // This method should receive a person object and add it as a request into the elevator’s queue.
    this.waitingList.push(passenger);
    this.requests.push(passenger)
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
