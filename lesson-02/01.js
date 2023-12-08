let number1 = Math.floor(Math.random() * 100);
let result;
if (number1 % 2 === 0) {
    result = `${number1}: Это четное число`;
} else {
    result = `${number1}: Это нечетное число`;
}
console.log(result);