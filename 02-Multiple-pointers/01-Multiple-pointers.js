/* Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. Return an array that includes
both values that sum to 0 or undefined if a pair does not exist */
/* O(n) */
function sumZero(arr) {
  // create two pointers, one at the beginning of the array and one at the end
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    // if the sum of the two values is 0, return the two values
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]]
    } else if (arr[left] + arr[right] > 0) {
      // if the sum is greater than 0, decrement the right pointer
      right--
    } else {
      // if the sum is less than 0, increment the left pointer
      left++
    }
  }
}

module.exports = sumZero
