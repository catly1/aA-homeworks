require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }
  end


  describe "instance methods" do
    test = User.new(email: "test@test.com")
    describe "is_password?" do
      it "should return true if it is the password" do 
        test.password=("test")
        expect(test.is_password?(test.password)).to be true
      end
    end


    describe "reset_session_token!" do
      it "should reset session token" do
        current = "1234"
        test.session_token = current
        test.password = "123456"
        test.reset_session_token!
        expect(test.session_token).to_not eq(current)
      end
    end
    
  end

  describe "class methods" do
    describe "::find_by_credentials" do
      it "should find the right user" do
        trial = User.new(email: "test@test.com")
        pw = "123456"
        trial.password = pw
        trial.save
      expect(User.find_by_credentials(trial.email, pw)).to eq(trial)
      end
    end
  end
end
