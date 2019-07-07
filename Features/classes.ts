class Vehicle {
  // color: string;
  //
  // constructor(color: string) {
  //   this.color = color;
  // }
  //above lines are equal to the short hand below
  constructor(public color: string) {}

  protected drive(): void {
    console.log('yata yata');
  }

  protected honk(): void {
    console.log('beep');
  }
}

const veh = new Vehicle('orange');
console.log(veh.color);

/**
 * public - methods can be called anywhere any time
 * private - this method can only be called by other methods in this class.
 * protected - this method can be called by other methods in this class or by other methods in child classes.
 */
class Car extends Vehicle {
  //This is overriding!!
  // Note that this method is public though yet it overrides the protected parent class method.
  drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.honk();
// vehicle.drive();

const car = new Car('red'); //directly calls parent constructor.
// car.honk();
car.startDrivingProcess();


class Car1 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
}
const car1 = new Car1(4, 'silver');
