class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end 
  end

  def show
    @user = User.find(params[:id])
  end 

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end 
end
