class User < ApplicationRecord
    has_many :games
    has_many :teams
    has_many :players
    has_secure_password

    validates :name, presence: true, uniqueness: true
    # validates :password, confirmation: true
    # validates :password_confirmation, presence: true
end
