const sumZero = require('./01-Multiple-pointers')
const countUniqueValues = require('./02-Count-unique-values')
const maxSubarraySum = require('./03-Sliding-window')

/*  Multiple pointers */
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])) // [-2, 2]
console.log(sumZero([-4, -3, -2, -1, 0, 7])) // undefined

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 8, 8, 8])) // 8

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
