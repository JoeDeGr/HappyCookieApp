class Resource < ApplicationRecord
    has_many :fortunes
    has_many :users, through: :fortunes
end
