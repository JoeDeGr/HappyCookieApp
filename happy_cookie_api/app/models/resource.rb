class Resource < ApplicationRecord
    has_many :fortunes
    has_many :users, through: :fortunes

    def get(user)
        ids = user.resource_ids
        fortunes = Resource.all.map(|id| ids.any?(id) == false)
        return fortunes[rand(fortunes.length)]
    end    
end
