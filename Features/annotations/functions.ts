/**
 * Always add annotations for arguments - there are no type inference on arguments.
 * Type Inference works for return value. Yet, We are still gonna sticiking to annotations on functions.
 * @param a
 * @param b
 */
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b:number): number {
  return a / b;
}

const multiply = function (a: number, b:number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

// But here might return message so no never type.

const throwErrorString = (message: string): string => {
  if(!message) throw new Error('No Message');
  else return message;
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

//ES6 destructuring..
const logWeather = ({ date, weather }: { date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
