class UsersController < ApplicationController
  # skip_before_action :require_login, only:[:create]
  # skip_before_action :current_user, only:[:create]

  def create
    user = User.find_by(user_params) || User.create(user_password)
  
    if user.valid? && user.authenticate(params[:user][:password])
      fortunes = Fortune.where(user_id: user.id)
      # session[:user_id] = user.id 
      render json: {user: UserSerializer.new(user).to_serialized_json, fortunes: fortunes} 
    else
      binding.pry
      render json: {errors: "Login Failed"}
    end
  end

  def destroy
  end

end

private

def user_params
  params.require(:user).permit(:name, :email)
end

def user_password
  params.require(:user).permit(:name, :email, :password)
end
