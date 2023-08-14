// can check condidtion for every value in the array
// return a boolean value

// check array numbers are satisfy the condition
const numbers = [1,2,3,4,5,6];

const response = numbers.every(check);

function check(number) {
    return number < 10;
}

console.log(response);