// var msg = 'Hello World';
// console.log(msg);

// function mysteryScoping1() {

//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     var x = 'out of block';
//     console.log(x);
// }

// mysteryScoping1()

// function mysteryScoping2() {
//     const x = 'out of block';
//     if (true) {
//         const x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping2()

// function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//         const x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping3()

// function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping4()

// function mysteryScoping5() {
//     var x = 'out of block';
//     console.log(x);
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     var x = 'out of block again';
//     console.log(x);
// }

// mysteryScoping5()

// madLib
const madLib = (verb, adjective, noun) => console.log(`we shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`);
madLib('make', 'best', 'guac');

// isSubstring
function isSubstring(searchString, subString) {
    return searchString.includes(subString);
}

// fizzbuzz
function fizzBuzz(array) {
    var arr = [];

    array.forEach(el => {
        if (((el % 3 === 0) || (el % 5 === 0)) && !((el % 3 === 0) && (el % 5 === 0))) {
            arr.push(el);
        }
    });

    return arr;
}

// console.log(fizzBuzz([3,4,5,8]))

// isPrime

function isPrime(n) {
    if (n < 2) { return false; }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// console.log(isPrime(3))

// sumOfNPrimes

function sumOfNPrimes(n) {
    let sum = 0;
    let count = 0;
    let i = 2;

    while (count < n) {
        if (isPrime(i)) {
            sum += i;
            count++;
        }
        i++;
    }

    return sum;
}

// console.log(sumOfNPrimes(4))

Array.prototype.transpose = function () {
    const tranposed = []
    for (let i = 0; i < this.length; i++){
        const row = []
        for (let j = 0; j < this.length; j++) {
        row.push(this[j][i])
        }

        tranposed.push(row)
    }
    return tranposed
}

console.log([[1,3],[5,6]].transpose())