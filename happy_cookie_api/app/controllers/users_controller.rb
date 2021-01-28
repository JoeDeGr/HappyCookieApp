class UsersController < ApplicationController
  skip_before_action :require_login, only:[:create]
  skip_before_action :current_user, only:[:create]

  def create
    user = User.find_or_create_by(user_params)
    binding.pry
    # return head(:forbidden) unless user.authenticate(params[:password])
    fortunes = Fortune.where(user_id: user.id)
    session[:user_id] = user.id
    binding.pry
    render json: {user: UserSerializer.new(user).to_serialized_json, fortunes: fortunes} 
  end

  def destroy
  end

end
