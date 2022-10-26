class Team < ApplicationRecord
  belongs_to :players
  belongs_to :games
  has_many :players
  has_many :games
end