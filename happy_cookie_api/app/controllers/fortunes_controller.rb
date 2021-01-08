class FortunesController < ApplicationController
  def index
    fortune = Fortune.all
    render json: fortune.to_json
    binding.pry
  end

  def create
    render "got the fetch"
  end

  def destroy
    render "got the fetch"
  end
end
