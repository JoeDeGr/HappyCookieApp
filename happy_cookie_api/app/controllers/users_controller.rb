class UsersController < ApplicationController
  def index
  end

  def create
    user = User.find_or_create_by(user_params)
    fortune = fortune.new(fortune_params)
    binding.pry
    render "got the fetch"
  end

  def show
  end

  def destroy
  end


private

  def user_params(params)
    params.require(:user).permit(:name, :email, :password)
  end
  
  def fortune_params(params)
    params.require(:fortune).permit(:name)
  end

end
