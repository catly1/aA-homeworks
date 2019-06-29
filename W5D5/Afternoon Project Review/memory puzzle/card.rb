# Card 
#     -# An instance variable for (a..z).to_a.sample
#     - Display card information ( facedown or faceup )
#         - Value when face down - hidden 
#         - Value when faced up - revealed
#     - to_s 
#     - (row, col) == (row, col)


class Card
    # attr_ :letter
    attr_accessor :info, :letter, :revealed, :hidden
    def initialize(letter)
        @letter = letter
        @hidden = true
        @revealed = false
    end

    def to_s
        if @hidden
            return " "
        else
            return letter
        end
    end

    def hide
        @hidden = true
    end

    def reveal
       @hidden = false
    end

end