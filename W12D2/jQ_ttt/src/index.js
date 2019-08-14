const View = require('./ttt-view.js')
const Game = require('./game.js')

  $(() => {
    // Your code here
    const newGame = new Game();
    const $ttt = $(".ttt");
    const newView = new View(newGame, $ttt);
    newView.bindEvents();
    
    console.log($ttt);
    console.log("test");

  });
