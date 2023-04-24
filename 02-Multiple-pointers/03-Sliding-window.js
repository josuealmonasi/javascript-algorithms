/* Write a function called maxSubarraySum which accepts an array of integers
and a number called n. The function should calculate the maximum
sum of n consecutive elements in the array */
/* O(n) */
function maxSubarraySum(arr, num) {
  // if the length of the array is less than the number, return null
  if (arr.length < num) {
    return null
  }
  let max = 0 // create a variable to hold the max value
  for (let i = 0; i < num; i++) {
    // loop through the array up to the number
    max += arr[i] // add the value of the current index to the max variable
  }
  let temp = max // create a variable to hold the temporary value
  for (let i = num; i < arr.length; i++) {
    // loop through the array starting at the number
    temp = temp - arr[i - num] + arr[i] // subtract the value of the index minus the number from the temporary value and add the value of the current index
    max = Math.max(max, temp) // set the max variable to the max of the max variable and the temporary variable
  }
  return max // return the max variable
}

module.exports = maxSubarraySum
