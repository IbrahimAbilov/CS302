const numbers = [5, 10, 15, 20, 25, 30]

// let sum = 0
// let sum2 = 0
let mult1 = 1
let mult2 = 1

numbers.map(item => mult1 *= item)
numbers.map((item, index) => mult2 *= index)

console.log(mult1);
console.log(mult2);
console.log(mult1-mult2);


// numbers.map (item => sum += item )
// console.log(sum);
// console.log(sum2);
// console.log(mult);







