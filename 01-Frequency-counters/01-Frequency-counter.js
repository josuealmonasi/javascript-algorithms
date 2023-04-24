/*  Frequency Counter Pattern - sameFrequency */
/*  Given two arrays, let's check if one contains all the squared values of the first one */
/* in such ways that same([1, 2, 3, 2], [9, 1, 4, 4]) returns true */
/* same([1, 2, 3, 2], [9, 1, 4, 9]) returns false */
/* and same([1, 2, 3, 2], [9, 1, 4, 6]) returns false */
function same(arr1, arr2) {
  // if the length of the arrays are not the same, return false
  if (arr1.length !== arr2.length) {
    return false
  }
  // loop through the first array
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2) // looks for the index of the squared value
    if (correctIndex === -1) {
      // if the value is not found, return false
      return false
    }
    arr2.splice(correctIndex, 1) // if the value is found, remove it from the array
  }
  return true // if the loop finishes, return true
}

module.exports = same
