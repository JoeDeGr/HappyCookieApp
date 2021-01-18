class UsersController < ApplicationController
  def index
    user = User.all

    render json: user.to_json
  end

  def create
    user = User.find_or_create_by(user_params)
    fortunes = Fortune.where(user_id: user.id)
    render json: {user: user, fortunes: fortunes}
  end

  def show
  end

  def destroy
  end

end
