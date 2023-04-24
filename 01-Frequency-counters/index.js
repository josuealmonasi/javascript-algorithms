const same = require('./01-Frequency-counter.js')
const sameRefactored = require('./02-Frequency-counter-refactored.js')

console.log(same([1, 2, 3, 2], [9, 1, 4, 4])) // true
console.log(same([1, 2, 3, 2], [9, 1, 4, 5])) // false

console.log(sameRefactored([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])) // false
console.log(sameRefactored([1, 2, 3, 2, 5], [9, 1, 4, 4, 25])) // true
