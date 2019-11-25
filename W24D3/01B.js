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
  let arr = str.split(".")
  if (arr.length < 4) return false
  let numsArr = arr.map(ele => parseInt(ele))
  return numsArr.every(ele => ele <= 255 && ele >= 0)
}

// console.log(valid_ip("255.255.255.255"))
// console.log(valid_ip("0.0.0.0"))
// console.log(valid_ip("1.255.0.0"))
// console.log(valid_ip("-1.255.0.0"))

// sum_from_file
// Write a method that reads in a file of integers, one per line, and sums them. Skip the line if it begins with a "#".

// function sum_from_file(filename){

// }

// shufle
// You are given an array and a random number generator. Shuffle the array.

// function shuffle(array){
//   let newArr = []

//   while (newArr.length < array.length) {
//     let index = Math.floor(Math.random() * array.length)
//     while (newArr.includes(array[index])) {
//       index = Math.floor(Math.random() * array.length)
//     }

//     newArr.push(array[index])
//   }

//   return newArr
// }

// console.log(shuffle([1,2,3,4]))

// let x = 2;
// let y = 8;
// const a = function (b) { return function (c) {
//   console.log(x)
//   console.log(b) 
//   console.log(c)
//   console.log(y)
//   return x + y + Math.abs(b) + c; } };

// // Statement will go 
// y = 4

// const fn = a(x);
// console.log("first", x, fn)
// x = 4;
// console.log(fn(Math.random() * 10));

// myMap
// Implement the Array.prototype.map function in JavaScript.

//03A
// Array.prototype.myMap = function(fn) {
//   let mapped = []

//   this.forEach(ele => mapped.push(fn(ele)))

//   return mapped
// }

// SELECT
//   employees.*
// FROM
//   employees e
// JOIN
//   departments d ON e.department_id = d.id
// WHERE
//   d.name = ?


// uniq_subs
// Write a method that finds all the unique substrings for a word.

function uniqSubs(str){
  let subs = []

  for (let i = 0; i < str.length; i++){
    for (let j = i + 1; j <= str.length; j++ ){
      subs.push(str.slice(i,j))
    }
  }

  return subs
}

// largest_contiguous_subsum
// Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).

// console.log(uniqSubs("cat"))

function largestContSubSum(arr){
  let sub = []
  let max = -Infinity

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let sliced = arr.slice(i, j)
      let sum = sliced.reduce((a, b) => a + b)
      if (sum > max) {
        sub = sliced
        max = sum
      }
    }
  }

  return sub
}


// console.log(largestContSubSum([1,3,4,5]))

// foldingCipher

// Implement the Folding Cipher. It folds the alphabet in half and uses the adjacent letter. Ie. a <=> z, b <=> y, c <=> x, m <=> n.
function foldingCipher(str){
  let hash = {}
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < alphabet.length; i++){
    hash[alphabet[i]] = alphabet[alphabet.length - 1 - i]
  }
  let ans = ""
  str.split("").forEach(letter => {
    ans += hash[letter]
    })
  return ans
}

console.log(foldingCipher("test"))

// silly_years
// Write a function that takes a year (four digit integer) and returns an array with the 10 closest subsequent years that meet the following condition: the first two digits summed with the last two digits are equal to the middle two digits. E.g.,

const sillyYears = () => {
  
}