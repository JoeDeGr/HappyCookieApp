class FortunesController < ApplicationController
  def index
    message = "got the fetch"
    render JSON: message
  end

  def create
    render "got the fetch"
  end

  def destroy
    render "got the fetch"
  end
end
