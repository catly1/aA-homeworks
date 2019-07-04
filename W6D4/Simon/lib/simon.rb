class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []

  end

  def play
    until @game_over
      take_turn
      system("clear")
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    ans = require_sequence
    unless ans == @seq
      @game_over = true
    end
    unless @game_over
      round_success_message
      @sequence_length += 1
    end

  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts color
      sleep(1)
      system("clear")
    end
  end

  def require_sequence
    puts "Do it!"
    seq = []
    until seq.size == @sequence_length
      ans = gets.chomp
      seq << ans
    end
    seq
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "You did it!"
  end

  def game_over_message
    puts "You fucked up"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end


game = Simon.new
game.play