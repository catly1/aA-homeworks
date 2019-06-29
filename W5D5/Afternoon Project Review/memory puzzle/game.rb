require_relative "board"
require_relative "player"

class Memory
    def initialize(player, board)
        @player = player
        @board = board
        @board.generate
    end

    def first_guess
        puts "First Guess"
        pos = @player.get_pos
        if valid_pos?(pos)
            @board[pos].reveal
            @board.display
            system("clear")
            return pos
        else
            puts "Already picked that one try again!"
            sleep(1)
            system("clear")
            @board.display
            first_guess
        end
    end

    def next_guess
        @board.display
        puts "Next Guess"
        pos = @player.get_pos
        if valid_pos?(pos)
            @board[pos].reveal
            system("clear")
            return pos
        else
            puts "Already picked that one try again!"
            sleep(1)
            system("clear")
            next_guess
        end
    end

    def turn
        first = first_guess
        second = next_guess
        if @board[first].letter == @board[second].letter
            @board.display
            puts "Good Job!"
        else
            @board.display
            puts "Nope"
            @board[first].hide
            @board[second].hide
            sleep(1)
            system("clear")            
            @board.display
        end

    end

    def play
        @board.display
        until @board.over?
            turn
        end

        puts "You did it!"
    end

    def valid_pos?(pos)
        @board[pos].hidden
    end
end

if $PROGRAM_NAME == __FILE__
  Memory.new(HumanPlayer.new, Board.new).play
end