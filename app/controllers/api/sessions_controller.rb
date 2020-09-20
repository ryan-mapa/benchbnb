class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      # render json: ["Invalid Credentials"], status: 403
      render json: {general: ["Invalid email or password"]}, status: 403
    end 
  end 

  def destroy
    if current_user
      @user = current_user
      logout
      render "api/users/show"
    else
      render json: ["No user logged in"], status: 422
    end 
  end 
end
