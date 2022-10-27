class Player < ApplicationRecord
  belongs_to :team
  # has_one :team
  has_many :games, through: :team
end
