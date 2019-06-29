# Board
#     - 4 x 4 grid
#     - Makes the grid # populate
#     - Print the grid # render
  
#     - Hide & reveal grid # reveal (guessed_pos)
#     - check won? # won
#     - over? #over

#     16 facedown cards
#         - 8 random cards
#         - 8 matches 

require_relative "card"

class Board
    def generate
        make_card
        make_grid
    end

    attr_reader :cards, :grid
    def initialize
        @grid = Array.new(4) { Array.new(4) }
        @cards = []
        @size = 4 * 4
    end

    def [](pos)
        row, col = pos
        @grid[row][col]
    end

    def []=(pos, val)
        row, col = pos
        @grid[row][col] = val
    end



    def make_card
            letter = ("a".."z").to_a.shuffle

            random_letter = letter[0..7] *= 2

            random_letter.each do |letter|
                @cards << Card.new(letter)
            end
        @cards.shuffle!
    end

    def make_grid
        (0...grid.size).each do |row|
            (0...grid.size).each do |col|
                self[[row, col]] = @cards.pop
            end
        end
    end

    def display
            puts "_|_ #{(0...grid.size).to_a.join("_ ")}_"
        (0...grid.size).each do |row|
            puts "#{row}|  #{grid[row].join("  ")} "
        end
    end

    def over?
        @grid.flatten.all? {|card| !card.hidden}
    end

end


