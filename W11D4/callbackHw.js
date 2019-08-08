let alert = function() {
    console.log('HAMMERTIME');
};

// global.setTimeout(alert, 5000)

function hammerTime(time) {
    function alert2() {
        console.log(`${time} is hammertime!`)
    }
    global.setTimeout(alert, time)
}

// hammerTime(5000)

const readline = require('readline');


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// reader.question("Want some tea?", function (answer) {
//     console.log(`You said ${answer}`);

//     reader.close();
// });

reader.question("Want some biscuits?", teaAndBiscuits())

function teaAndBiscuits() {
    let first, second;

    reader.question('Would you like some tea?', (res) => {
        first = res;
        console.log(`You replied ${res}.`);

        reader.question('Would you like some biscuits?', (res) => {
            second = res;
            console.log(`You replied ${res}.`);

            const firstRes = (first === 'yes') ? 'do' : 'don\'t';
            const secondRes = (second === 'yes') ? 'do' : 'don\'t';
            console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);

            reader.close();
        });


    });

}