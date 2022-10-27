class Game < ApplicationRecord
  belongs_to :team
  # has_one :team
  has_many :players, through: :team
end
