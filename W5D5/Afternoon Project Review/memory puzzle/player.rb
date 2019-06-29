class HumanPlayer
    def initialize
    end

    def get_pos
        puts "Type a position"
        pos = gets.chomp
        row = pos[0].to_i
        col = pos[-1].to_i
        return [row,col]
    end
end