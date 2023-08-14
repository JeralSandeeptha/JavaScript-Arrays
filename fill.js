// change all elements with given value
// modify the array

const numbers = [1,2,3,4,5,6];

numbers.fill(0);

console.log(numbers);


//we can spcify the start to end index to change only for those elements
const numbersTwo = [1,2,3,4,5,6];

numbersTwo.fill(0, 0, 3);

console.log(numbersTwo);