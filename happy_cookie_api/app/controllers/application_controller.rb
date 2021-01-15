class ApplicationController < ActionController::API

    private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
  
  def fortune_params(params)
    params.require(:fortune).permit(:name)
  end
end
