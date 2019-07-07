/**
 * `: number` --> Type Annotation.
 * Developers tells the tsc what type of variable that `apples` is
 */
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//Built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, false];

//Classes
class Car {

}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
    x: 10,
    y:20
};

//Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};


/**
 * If the things above are TYPE ANNOTATIONS then what the hell is TYPE INFERENCE
 * Remove all the `: type` thinge from the above. then ctrl + hover over it.
 * You will see the exact same info as you had seen with while TYPE ANNOTATED.
 * Well, Basically this is called TYPE INFERENCE.
 * In simple words,
 * Type Annotations - We developers tell Typescript the type.
 * Type Interference - Typescript guesses the type all by itself.
 */


// When to use annotations.
// 1. Functions that returns the `any` type.
const json = '{"x": 10, "y": 20}';
//JSON.prase returns type `any`. So we need to annotate here.
const coordiantes: { x: number; y: number } = JSON.parse(json);

//2. When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

words.forEach(each => {
    if(each === 'green') {
        foundWord = true;
    }
});

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

numbers.forEach(x => {
    if(x > 0) {
        numberAboveZero = x;
    }
});
