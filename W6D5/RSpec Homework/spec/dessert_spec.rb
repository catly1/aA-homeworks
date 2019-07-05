require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", name: "Tucker") }
  let(:dessert) do 
    # double("chef")
    Dessert.new("cold", 2, chef)
  end

  describe "#initialize" do
    it "sets a type" do
      expect(dessert.instance_variable_get(:@type)).to eq("cold")
    end

    it "sets a quantity" do 
      expect(dessert.instance_variable_get(:@quantity)).to eq(2)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.instance_variable_get(:@ingredients)).to eq([]) 
    end

    it "raises an argument error when given a non-integer quantity" do
      expect {Dessert.new("cold","mom","Carl")}.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      dessert.add_ingredient("test")
      expect(dessert.instance_variable_get(:@ingredients)).to eq(["test"])
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      dessert.add_ingredient("1test")
      dessert.add_ingredient("2test")
      dessert.add_ingredient("3test")
      expect(dessert.instance_variable_get(:@ingredients)).to eq(["1test","2test","3test"])
    end

  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      dessert.eat(2)
      expect(dessert.instance_variable_get(:@quantity)).to eq(0)
    end

    it "raises an error if the amount is greater than the quantity" do
      # dessert.eat(3)
      expect {dessert.eat(3)}.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Chef Tucker the Great Baker")
      expect(dessert.serve).to eq("Chef Tucker the Great Baker has made 2 colds!")    
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(dessert)
      dessert.make_more
     end
  end
end
