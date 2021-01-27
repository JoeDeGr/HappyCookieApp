class User < ApplicationRecord
    has_secure_password
    has_many :fortunes
    has_many :resources, through: :fortunes
end
