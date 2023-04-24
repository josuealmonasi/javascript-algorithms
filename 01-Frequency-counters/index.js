const same = require('./01-Frequency-counter.js')
const sameRefactored = require('./02-Frequency-counter-refactored.js')
const validAnagram = require('./03-anagram.js')

/* Frequency Counter Pattern - sameFrequency */
console.log(same([1, 2, 3, 2], [9, 1, 4, 4])) // true
console.log(same([1, 2, 3, 2], [9, 1, 4, 5])) // false

console.log(sameRefactored([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])) // false
console.log(sameRefactored([1, 2, 3, 2, 5], [9, 1, 4, 4, 25])) // true

/* Anagram - sameFrequency */
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('anagram', 'nagarama')) // false
