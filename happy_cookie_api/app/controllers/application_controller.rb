class ApplicationController < ActionController::API
  # before_action :require_login
  # before_action :current_user

    private

  # def user_params
  #   binding.pry
  #   params.require(:user).permit(:name, :email, :password, :password_confirmation)
  # end

  def require_login
    binding.pry
      return head(:forbidden) unless session.include? :user_id
  end

  def current_user
      user = (User.find(session[:user_id]) || User.new)
  end
end
