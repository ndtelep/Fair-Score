class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest
  # has_many :games
  # has_many :players
  has_many :teams
end
