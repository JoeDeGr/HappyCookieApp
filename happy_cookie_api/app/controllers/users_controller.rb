class UsersController < ApplicationController
  def index
    user = User.all

    render json: user.to_json
  end

  def create
    user = User.find_or_create_by(user_params)
    render json: user.to_json
  end

  def show
  end

  def destroy
  end

end
