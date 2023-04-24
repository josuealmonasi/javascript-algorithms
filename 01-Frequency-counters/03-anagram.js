/* Given two strings, determine if the second is an anagram of the first */
/* O(n) */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    // if the length of the strings are not the same,
    return false // return false
  }
  const frequencyCounter1 = {} // create an empty object for the first string
  const frequencyCounter2 = {} // create an empty object for the second string
  for (let val of str1) {
    // loop through the first string
    // if the value is not in the object, add it and set it to 1, if it is, increment it by 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of str2) {
    // same as above
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  for (let key in frequencyCounter1) {
    // loop through the first object
    if (!(key in frequencyCounter2)) {
      // if the key is not in the second object,
      return false // return false
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      // if the value of the key is not the same as the value of the key
      return false // return false
    }
  }
  return true // if the loop finishes, return true
}

function validAnagramRefactored(str1, str2) {
  if (str1.length !== str2.length) {
    // if the length of the strings are not the same,
    return false // return false
  }
  const lookup = {} // create an empty object
  for (let letter of str1) {
    // loop through the first string
    // if the letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }
  console.log(lookup)
  for (let letter of str2) {
    // loop through the second string
    // if the letter is not in the object
    if (!lookup[letter]) {
      return false // return false
    } else {
      lookup[letter] -= 1 // subtract 1 from the letter
      console.log(lookup)
    }
  }
  return true
}

module.exports = { validAnagram, validAnagramRefactored }
