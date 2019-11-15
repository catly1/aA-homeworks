// longest_common_substring

// Write a function, longest_common_substring(str1, str2) that takes two strings and returns the longest common substring. A substring is defined as any consecutive slice of letters from another string.

// function longest_common_substring(str1, str2){
//   let longest_sub = "";

//   for(let i = 0; i < str1.length; i++){
//     let len = longest_sub.length + 1;

//     for(let j = i + len; j <= str1.length; j++){
//       let sub = str1.slice(i, j);
//       if(str2.includes(sub)){
//         longest_sub = sub
//       }
//     }
//   }

//   return longest_sub;
// }

// console.log(longest_common_substring("transports", "reported")) // "port"

//sum_rec
//Write a function that takes an array of integers and returns their sum. Use recursion.

//(1,2,3) => 6

// function sum_rec (nums){
//     if( nums.length === 0) return 0

//     return nums.pop() + sum_rec(nums)
// }

// console.log(sum_rec([1, 2, 3]))


// function fibs (nums){
//   if (nums <= 2){
//     return [0,1].slice(0, nums)
//   }

//   let fibsArr = fibs(nums - 1)

//   fibsArr.push(fibsArr[fibsArr.length - 1] + fibsArr[fibsArr.length - 2])

//   return fibsArr
// }
// console.log(fibs(4))
// console.log(fibs(5))

// function isPalindrome(string) {
//   for (let i = 0; i < string.length; i++){
//     let firstLetter = string[i]
//     let lastLetter = string[string.length -1 - i]

//     if (firstLetter !== lastLetter) {
//       return false
//     }
//   }

//   return true
// }

// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("cec"))

// valid_ip?
// Write a method that takes a string as input. It should return true if the input is a valid IPv4 address (ie. anything between 0.0.0.0 and 255.255.255.255 is valid).

function valid_ip(str){

}