
//function will compare first part of the input word wth second part woth the input and if theu same return TRUE, if not terurn FALSE
function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
   //i and j are coresponding leter indexesfrom begining and end of our word.  
  for (let i= 0; i < word.length/2; i++){
    let j = word.length-1-i
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    if (word[i] !== word[j])
    {
      //if leters don't mutch return 'false'
      return false
    }
  }
  // if we reach the middle, and all the letters match, return true
  return true
}



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
