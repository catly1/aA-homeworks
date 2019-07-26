class UserMailer < ApplicationMailer
  default from: 'from@example.com'

  def welcome_email(user)
    # your code here
    @user = user
    @url = "http://localhost:3000/session/new"
    mail(to: user.username, subject: "Why did you join?")
  end
end
