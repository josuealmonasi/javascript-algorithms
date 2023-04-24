/* Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array. There can be negative numbers in the array,
but it will always be sorted */
/* O(n) */
function countUniqueValues(arr) {
  // if the array is empty, return 0
  if (arr.length === 0) {
    return 0
  }
  let i = 0 // create a pointer at the beginning of the array
  for (let j = 1; j < arr.length; j++) {
    // create a second pointer at the second value in the array
    if (arr[i] !== arr[j]) {
      // if the two values are not the same,
      i++ // increment the first pointer
      arr[i] = arr[j] // set the value of the first pointer to the value of the second pointer
    }
  }
  return i + 1 // return the first pointer plus 1
}

// countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
// countUniqueValues([1, 2, 3]) // 3

module.exports = countUniqueValues
