class Player < ApplicationRecord
    has_one :team
    has_many :games, through: :team
end
