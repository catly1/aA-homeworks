// Phase I: Callbacks
function titleize (arr) {
    const map = arr.map(ele => (`Mx. ${ele} Jingleheimer Schmidt`))

    map.forEach( ele => console.log(ele))
}


const names = ["Mary", "Brian", "Leo"]

// titleize(["Mary", "Brian", "Leo"]);
// Phase II: Constructors, Prototypes, and this
function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;

}

Elephant.prototype.trumpet = function () {
    console.log(this.name + " the elephant goes 'phrRRRRRRRRRRR!!!!!!!");
}

Elephant.prototype.grow = function () {
    this.height += 12
    console.log(this.height)
}

Elephant.prototype.addTrick = function (trick) {
    this.tricks.push(trick)
    console.log(this.tricks)
}

Elephant.prototype.play = function () {
    let rand = this.tricks[Math.floor(Math.random() * this.tricks.length)];
    console.log(this.name + " is " + rand + "!")
}

// e1 = new Elephant ("Cole", 2, ["sit", "fetch"]);

// e1.trumpet()

// e1.addTrick("pop")

// e1.grow()

// e1.play()

// Phase III: Function Invocation
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elep) {
    console.log(elep.name + " is trotting by!")
}

// herd.forEach(ele => Elephant.paradeHelper(ele))

// Phase IV: Closures

let bfastOrder = function dinerBreakfast (food) {
        let order = ""
    if (food) {
        order = `I'd like cheesy scrambled eggs ${'and ' + food} please`
    } else {
        order = `I'd like cheesy scrambled eggs please`
    }

    console.log(order)

};

bfastOrder()
bfastOrder("chocolate chip pancakes");