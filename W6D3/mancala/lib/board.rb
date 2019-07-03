require "byebug"
class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @player1 = name1
    @player2 = name2
    @cups = Array.new(14) {Array.new(4, :stone)}
    @cups[6] = []
    @cups[13] = []
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    unless start_pos >= 0 && start_pos < 13
      raise "Invalid starting cup"
    end

    if @cups[start_pos].empty?
      raise "Starting cup is empty"
    end

      return true
  end

  def make_move(start_pos, current_player_name)
    
    stones = @cups[start_pos].count
    @cups[start_pos] = []
    current_pos = start_pos
    player1_score_idx = 6
    player2_score_idx = 13

    if current_player_name == @player1




      
      until stones == 0
        current_pos = (current_pos + 1) % 14
        if current_pos != player2_score_idx
          @cups[current_pos] << :stone
          stones -= 1
        else
          current_pos = (current_pos + 1) % 14
          @cups[current_pos] << :stone
          stones -= 1
        end
      end


    else

      until stones == 0
        current_pos = (current_pos + 1) % 14
        if current_pos != player1_score_idx
          @cups[current_pos] << :stone
          stones -= 1
        else
        current_pos = (current_pos + 1) % 14
          @cups[current_pos] << :stone
          stones -= 1
        end
      end

    end
      render
      next_turn(current_pos)
  end

  def next_turn(ending_cup_idx)
    turn = @cups[ending_cup_idx]

    if ending_cup_idx == 6 || ending_cup_idx == 13
      return :prompt
    end

    if turn.count == 1
      return :switch
    else
      return ending_cup_idx
    end

    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[7..12].all? {|cup| cup.empty?} || @cups[0..5].all? {|cup| cup.empty?}
  end

  def winner
    if @cups[6].size > @cups[13].size 
      return @player1
    elsif @cups[13].size > @cups[6].size
      return @player2
    else
      return :draw
    end

  end
end
