class FortunesController < ApplicationController
  def index
    fortune = Fortune.all
    render json: fortune
  end

  def create
    user = User.find_by_id(params[:user_id])
    binding.pry
    fortune = Fortune.new(id: 10, resource_id: "new fortune", posVibes: "feeling it!", user_id: user.id)
    render json: fortune
  end

  def destroy
    render "got the fetch"
  end
end
