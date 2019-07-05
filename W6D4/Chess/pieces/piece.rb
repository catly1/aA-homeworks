require "colorize"

class Piece 
    attr_reader :color
    attr_accessor :board, :pos
    
    def initialize(color, board, pos)
        @color = color 
        @board = board
        @pos = pos 
    end 

    def to_s
        "#{symbol}" 
    end 

    def empty?
    end 

    def valid_moves
        moves.reject { |move| move_into_check?(move)}
    end 

    def pos=(val)
        @pos = val 
    end 

    def symbol
        raise "The symbol is not assigned!"
    end 



    def move_into_check?(end_pos)
        duplicated = @board.board_dup
        if duplicated.move_piece(@color,@pos,end_pos)
            duplicated.in_check?(@color)
        else
            return false
        end
    end 
end 



    def move_piece(color, start_pos, end_pos)
        if self[start_pos].empty? || color == self[end_pos].color 
            raise "That place is not valid"
        end

        self[start_pos].pos = end_pos
        self[end_pos].pos = start_pos
        self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
    end







