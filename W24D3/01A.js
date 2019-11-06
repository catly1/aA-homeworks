// Write a method, digital_root(num). It should sum the digits of a positive integer. If it is greater than or equal to 10, sum the digits of the resulting number. Keep repeating until there is only one digit in the result, called the "digital root". Do not use string conversion within your method.

// sample input: num = 15
// output: 6

function digital_root(num){
  if(num < 10) return num;

  let rem = num % 10

  return rem + digital_root(Math.floor(num / 10))
}

// console.log(digital_root(15))
// console.log(digital_root(153))

// Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet. Assume lowercase and no punctuation. Preserve spaces.


// str = cat 
// shift = 1

// ans = d b u


function caesar_cipher(str, shift){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let ans = ""

    for(let i = 0; i < str.length; i++){
        if (str[i] === " "){
            ans += " "
            continue
        }

        let oldIdx = alpha.indexOf(str[i])
        let newIdx = (oldIdx + shift) % (alpha.length)

        ans += alpha[newIdx]
    }

    return ans
}

console.log(caesar_cipher("dyz", 2))
console.log(caesar_cipher("dog", 1))