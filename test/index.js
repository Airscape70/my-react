class Car {
  constructor() {
    this.speed = 0;
  }

  accelerate(x) {
    this.speed += 10;
  }

  stop() {
    this.speed = 0;
  }
}

class Vaz extends Car {


  constructor() {
    this.breaks = 0;

    super();
  }

  accelerate(x, y) {
    
  }

  break() {
    this.breaks += 1;
  }

  repair() {
    this.breaks = 0;
  }
}

const x = new Vaz()