class TeamSerializer < ActiveModel::Serializer
  attributes :id, :location, :nickname, :home_venue, :imageUrl
  has_many :players
end
