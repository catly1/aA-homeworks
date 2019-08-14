class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {

    $("li").on("click", (e) => {
    // if (this.game.board.winner()) {
      const $li = $(e.currentTarget);
      try {
      this.makeMove($li)
      }

      catch(err) {
        alert(err.msg)
      }

      $li.addClass(this.game.currentPlayer);

      if (this.game.board.winner()) {
        alert (`There is a winner! It is ${this.game.currentPlayer}!`);
        $("li").off()
        let winner = this.game.currentPlayer;
        let loser = winner === "o" ? "x" : "o";
        $(`.${winner}`).addClass("winner");
        $(`.${loser}`).addClass("loser");

      }

      if ((this.game.board.isOver()) && !(this.game.board.winner())) {
        alert(`There is a draw!`);
        $("li").off()
      }

    // }

    })


  }
  
  makeMove($square) {
    this.game.playMove($square.data("pos"))
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("group");
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $("<li>");
        $li.data("pos", [rowIdx, colIdx]);
        $ul.append($li);
      }
    }
    // debugger
    this.$el.append($ul);
  }
}

module.exports = View;
