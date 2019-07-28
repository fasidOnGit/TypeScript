const addOne = (a: number): number => {
  return a + 1;
};
const addTwo = (a: number): number => {
  return a + 1;
};
const addThree = (a: number): number => {
  return a + 1;
};

// One Simple way to do it is to have a second argument
const add = (a: number, b: number): number => {
  return a + b;
};

//GENERICS STARTS HERE..

class HoldNumber {
  data: number;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

//We need another class with string..
// One silly way to do it is create anoter class like HoldString

class HoldString {
  data: string;
}

const holdString = new HoldString();
holdString.data = 'string';


///FIX with Generics :)
/**
 * TypeOfData - Fairly an argument but of type. just like in the functions.
 * In funtions we pass in values or variables.
 * in classes - we pass in Types. and that's GENERICS!!
 */
class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdAsNumber = new HoldAnything<number>();
holdAsNumber.data = 2;

const holdAsString = new HoldAnything<string>();
holdAsString.data = 'string';



class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}


class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b']);

//Type interference with Generics
const arr = new ArrayOfAnything(['ab','c']); //Even though, we didn't assign the type like above. yet typescript automatically figure out the type of the generics that we passed in.


// Generics around Functions

function printStrings(arr: string[]): void {
  arr.forEach(console.log);
}
function printNumbers(arr: number[]): void {
  arr.forEach(console.log);
}

function printAnything<T>(arr: T[]): void {
  arr.forEach(console.log);
}
//without annotations
const printNumbres = printAnything([1,2,3]);
const printStringss = printAnything(['1','2','3']);

//with annotation
const printNum = printAnything<number>([1,2,3]);

//use with annotation : recommended.


//Generics Constraints

class Car {
  print() {
    console.log('I am a car');
  }
}


class House {
  print() {
    console.log('I am a house');
  }
}

function printHouseOrCars<T>(arr: T[]): void {
  arr.forEach(each => each.print()); // TS throws error!!1  Gotcha!! calling print method.
}

//Fix
interface Printable {
  print(): void;
}
function printHoursesOrCars<T extends Printable>(arr: T[]): void {
  arr.forEach(each => each.print())  // No error anymore.  so we can't call printHousesOrCars([1,2,3])
}
