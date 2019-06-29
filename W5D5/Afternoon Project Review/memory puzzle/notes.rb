Game
    - require classes

    - play: loop until board.over?
        - render the board
        - prompt the player for input
        - get the pos from the player

        - make_guess (take action at the pos)
            - step 1: hold the card up (wait for card 2) - # set a previous_guess variable
            - step 2: card 2 face up (check if match with card 1 ) # guessed_pos 
                - if match then leave both faced up
                - if not flip both faced down
                - Reset that previous_card variable
        - system(clear) - clears terminal
        - render the board - hide previous output 
        - sleep(for n second) - show incorrect guess for a few sec


    
Board
    - 4 x 4 grid
    - Makes the grid # populate
    - Print the grid # render
  
    - Hide & reveal grid # reveal (guessed_pos)
    - check won? # won
    - over? #over

Card 
    - An instance variable for (a..z).to_a.sample
    - Display card information ( facedown or faceup )
        - Value when face down - hidden 
        - Value when faced up - revealed
    - to_s 
    - (row, col) == (row, col)

Player
    - argument: name (Carlos, Abby)
    - input: pos


            #shuffle

            # random_letter[0..7] *= 2
            # p random_letter 

            # random_letter.each do |letter|
            #     @cards << Card.new(letter)
            # end

