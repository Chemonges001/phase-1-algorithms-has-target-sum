function hasTargetSum(array, target) {
  // Write your algorithm here
  for( let i = 0; i < array.length; i++) {

    for(let j = i + 1; j < array.length; j++){

      if(array[i] + array[j] === target)
        return true;

    }
    
  }
  return false;
  
}

/* 
  Write the Big O time complexity of your function here
*/
O(n**2)
/* 
  Add your pseudocode here
*/
Itterate through the array elements idenitfying the numbers that when added equals to the target

start from indexOf(0) and iterrate to find another number

if two numbers add to the target return true 

else, return false 

/*
  Add written explanation of your solution here
*/
the code iterates through the array and finds two numbers that adds to the target and returns a true 
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
