class FortunesController < ApplicationController
  def index
    fortune = Fortune.all
    render json: fortune.to_json
  end

  def create
    user = User.find_by_id(id: params[:user_id])
    binding.pry
    render "got the fetch"
  end

  def destroy
    render "got the fetch"
  end
end
