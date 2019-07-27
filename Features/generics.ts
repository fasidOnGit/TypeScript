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

