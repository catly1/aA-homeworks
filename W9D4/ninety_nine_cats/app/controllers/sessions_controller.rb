class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    user = User.find_by_credentials(params[:username], params[:password])

    if user
			session[:session_token] = user.reset_session_token!
			flash[:succes] = "Logged in successfully"
			redirect_to cats_url
    else
			flash[:error] = "Wrong email/password combo"
			render :new, status: 401
    end
  end

	def destroy
		current_user.reset_session_token!
		session[:session_token] = nil
		flash[:success] = "Logged out successfully!"
		redirect_to cats_url
	end

end