let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */

function _makeGrid () {
  let col = new Array(8);

  for ( let row = 0; row < col.length; row++) {
    col[row] = new Array(8);
  };
  col[3][4] = new Piece("black");
  col[4][3] = new Piece("black");
  col[3][3] = new Piece("white");
  col[4][4] = new Piece("white");
  
  return col;
}

Board.prototype.get = function (tuple) {
  const pos1 = tuple[0];
  const pos2 = tuple[1];
  return this.grid[pos1][pos2]
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  // debugger
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let piece_pos = this.grid[pos[0]][pos[1]]
  // if (piece_pos) {
  //   return piece_pos
  // } else {
  //   throw "Nothing there"
  // };
  return piece_pos;
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  // for (let col = 0; col < this.grid.length; col++) {
  //   for (let row = 0; row < this.grid.length; row++) {
  //     // debugger
  //     let piece2 = this.grid[col][row];

  //     if (piece2){
  //       if ( piece2.oppColor != color ) {
  //         console.log(piece2.oppColor())
  //       Board.DIRS.forEach((dir) => {
  //           let new_col = col + dir[0];
  //           let new_row = row + dir[1];
  //           console.log(new_col, new_row, dir, piece2);
  //         debugger
  //         if((new_col < 8 && new_col >= 0) && (new_row < 8 && new_row >= 0) && (this.grid[new_col][new_row] === undefined)){
  //           return true;
  //         };
  //       });
  //     };
  //     };
  //   };
  // };
  // return false
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if(this.get(pos)){
    return this.get(pos).color === color ? true : false
  };
  return false
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return !!this.get(pos)
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  return ((pos[0] < 8 && pos[0] >= 0) && (pos[1] < 8 && pos[1] >= 0))
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  // console.log(piecesToFlip)
  if((pos[0] > 8 || pos[0] < 0)){ return piecesToFlip };
  if((pos[1] > 8 || pos[1] < 0)){ return piecesToFlip };
  let oppColor = color === "white" ? "black" : "white";
  let newPos = [pos[0] + dir[0], pos[1] + dir[1]];
  let help = board.grid[newPos[0]][newPos[1]];
    if (!help){
      return piecesToFlip
  } else if (help.color === color){
      return piecesToFlip
  } else if (help.color === oppColor){
      piecesToFlip.push(newPos)
  };
 return _positionsToFlip(board, newPos, color, dir, piecesToFlip);

// same shit


// if (!piecesToFlip) {
//   piecesToFlip = [];
// } else {
//   piecesToFlip.push(pos);
// };

// let newPos = [pos[0] + dir[0], pos[1] + dir[1]];

//  if (!board.isValidPos(newPos)) {
//    return null;
//  } else if (!board.isOccupied(newPos)) {
//    return null;
//  } else if (board.isMine(newPos, color)) {
//    return piecesToFlip.length == 0 ? null : piecesToFlip;
//  } else {
//    return _positionsToFlip(board, newPos, color, dir, piecesToFlip);
//  }
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (!this.isOccupied(pos)){
    Board.DIRS.forEach((dir) => {
      let hope = _positionsToFlip(this, pos, color, dir, [])
      // console.log(hope);
      if (hope){
      debugger
        if (hope.length > 0){
          return true;
        };
      };
    });
  };

    return false
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {

};



module.exports = Board;

// board1 = new Board();

// const testtt = _positionsToFlip(board1, [2,3], "black", [1,0], []);

// console.log(testtt)

// it was showing [ [ 3, 3 ] ] before
// Now it's doing undefined
//bruh
// undefind
/// ooh lmao
// i had a console log in the recursive method
// ill add it back 
// no idea man lol im burnt 
// added a console log to hope and like there's nothing
// So prob it was some random thing that came up when we saw it