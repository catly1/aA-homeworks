require_relative "piece.rb"

class Board 
    attr_reader :rows

    def initialize 
        @rows = Array.new(8) {Array.new(8)}
        (0..1).each do |i|
            (0..7).each do |j|
                pos = [i,j]
                self[pos] = NullPiece.new
            end
        end
    end 

    def move_piece(start_pos, end_pos)
        if self[start_pos].nil? || !self[end_pos].nil?
            raise "That place is not valid"
        end
        self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
    end

    # def populate
    #     (0..7).each do |row|
    #         (0..7).each do |col|
    #             pos = [row, col]
    
    #     end 
    # end

    def [](pos)
        row, col = pos 
        @rows[row][col]
    end 
    
    def []=(pos, value)
        row, col = pos 
        @rows[row][col] = value 
    end 

    # def add_piece(piece, pos)
    #     self[pos] = piece 
    # end 

end 