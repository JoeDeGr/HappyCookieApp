class User < ApplicationRecord
    has_many :fortunes
    has_many :resources, through: :fortunes
end
