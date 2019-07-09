class Hand
  def self.deal_from(deck)
    Hand.new(deck.take(5))
  end

  attr_accessor :cards

  def initialize(cards)
    @cards = cards
  end

  def has_pair?
    count = Hash.new(0)
    @cards.each do |card|
        Hash[card.value] += 1
    end
    pairs = count.select {|k,v| v > 1}
    pairs.empty?
  end



  def has_straight?
    order = [2,3,4,5,6,7,8,9,10,"j","Q","K","A"]
    hand_arr = []
    @cards.each do |card|
        hand_arr << card.value
    end
    sorted = jumble_sort(hand_arr)
    
    (0...sorted.size - 1).each do |i|
        order_idx = order.index(sorted[i])
        next_idx = (order_idx + 1) % 13
        return false if sorted[i + 1] != order[next_idx]
    end
    return true
  end

  def has_royal_flush?
    royal = [10,"j","Q","K","A"]
    @cards.each do |card|
        return false unless royal.include?(card.value)
    end
    return true if has_flush?
    false
  end

  def has_flush?
    count = Hash.new(0)
    @cards.each do |card|
        Hash[card.suit] += 1
    end
    pairs = count.select {|k,v| v = 5}
    pairs.empty?
  end

    def beats?(other_hand)
        if self.has_royal_flush? && !other_hand.has_royal_flush?
            return true
        elsif self.has_royal_flush? && other_hand.has_royal_flush?
            rank = [:clubs,:diamond,:hearts,:spades]
            own_suit = self.cards[0].suit
            other_suit = other_hand.cards[0].suit
            if rank.index(own_suit) > rank.index(other_suit)
                return true
            else
                return false
            end
        elsif other.has_royal_flush
            return false
        end

        if self.has_straight? && !other_hand.has_straight?
            return true
        elsif self.has_straight? && other_hand.has_straight?
            
        end


    end  


def jumble_sort(arr)
  alphabet = [2,3,4,5,6,7,8,9,10,"j","Q","K","A"]
    sorted = false
    until sorted
      sorted = true

      (0...arr.length - 1).each do |i|
        alpha_index = alphabet.index(arr[i])
        next_index = alphabet.index(arr[i+1]) % 13
            if alpha_index > next_index
              arr[i], arr[i+1] = arr[i+1], arr[i]
              sorted = false
            end
      end

    end
    arr
end

end
