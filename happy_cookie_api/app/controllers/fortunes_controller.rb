class FortunesController < ApplicationController
  def index
    fortune = Fortune.all
    render json: fortune
  end

  def create
    user = User.find_by_id(params[:user_id])
    newFortune = Resource.first
    binding.pry
    fortune = Fortune.create(resource_id: newFortune.id, posVibes: newFortune.fortune, subType: newFortune.subType, user_id: user.id)
    render json: fortune
  end

  def destroy
    render "got the fetch"
  end
end
