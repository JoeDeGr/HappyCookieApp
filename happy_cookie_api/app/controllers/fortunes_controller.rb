class FortunesController < ApplicationController
  # def index
  #   fortune = Fortune.all
  #   render json: fortune
  # end

  def create

    user = User.find_by_id(params[:user_id])
    ids = user.resource_ids
    fortunes = Resource.all
    newFortunes = fortunes.collect{|fortune| fortune if ids.any?(fortune.id) == false}.compact
      if newFortunes.length == 0
        fortune = Fortune.new(id: 0, resource_id: 0, posVibes: "It seems you've gotten to the last cookie we currently have, please check back later!", subType: "default message", user_id: user.id)
      else 
        newFortune = newFortunes[rand(newFortunes.length)]
        fortune = Fortune.create(resource_id: newFortune.id, posVibes: newFortune.fortune, subType: newFortune.subType, user_id: user.id)
      end
    render json: fortune
  end

  def destroy
    render "got the fetch"
  end
end
