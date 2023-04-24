/* Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same*/
/* O(n) */
function same(arr1, arr2) {
  // if the length of the arrays are not the same then return false
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {} // create an empty object for the first array
  let frequencyCounter2 = {} // create an empty object for the second array
  for (let val of arr1) {
    // loop through the first array
    // if the value is not in the object, add it and set it to 1, if it is, increment it by 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    // loop through the second array
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 // same as above
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  for (let key in frequencyCounter1) {
    // loop through the first object
    if (!(key ** 2 in frequencyCounter2)) {
      // if the squared value of the key is not in the second object,
      return false // return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      // if the value of the squared key is not the same as the value of the key
      return false // return false
    }
  }
  return true // if the loop finishes, return true
}

module.exports = same
