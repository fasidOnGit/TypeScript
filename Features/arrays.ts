const carMakers: string[] = ['ford', 'toyata', 'chevy'];
const dates = [new Date(), new Date()];

/**
 * `:string[][]`  --> Type Annotations
 * string[] --> Inner Array
 * [] --> Outer array.
 */
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camero']
];

// Help with inference when extracting values.
let car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

//Flexible Types.
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
