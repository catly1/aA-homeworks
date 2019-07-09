require_relative "card"

class Deck
  def self.all_cards
    deck = []
    suits = Card::SUIT_STRINGS.keys
    values = Card::VALUE_STRINGS.keys
    suits.each do |suit|
      values.each do |value|
        deck << Card.new(suit, value)
      end
    end
    deck
  end

  def initialize(cards = Deck.all_cards)
    @cards = Deck.all_cards
  end

  def count
    @deck.count
  end

  def take(n)
    if n > count
      raise "not enough cards"
    end
    taken = []
    n.times do
      taken << @cards.shift
    end
    taken
  end
end