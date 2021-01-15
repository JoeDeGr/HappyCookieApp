class UsersController < ApplicationController
  def index
    user = User.all
    binding.pry
    render json: user.to_json
  end

  def create
    binding.pry
    user = User.find_or_create_by(user_params)
    # user = User.all
    render json: user.to_json
  end

  def show
  end

  def destroy
  end




end
