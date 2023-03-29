function hasTargetSum(array, target) {
  // Create an empty set to store the seen numbers
  const seen = new Set();

  // Loop through the array
  for (let i = 0; i < array.length; i++) {
    // Check if the complement of the current number is in the seen set
    const complement = target - array[i];
    if (seen.has(complement)) {
      return true;
    }
    // Add the current number to the seen set
    seen.add(array[i]);
  }

  // If no pair adds up to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here


*/

/* 
  Add your pseudocode here
  iterate from the beginning of the string to the end of the array
  compare the number we're iterating over to the corresponding number at the end of the array
    if the letters add up to target, return false

if any two numbers add up to target, return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
console.log("Expecting: true");
console.log("=>",hasTargetSum([1,2,3,4],5));


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
