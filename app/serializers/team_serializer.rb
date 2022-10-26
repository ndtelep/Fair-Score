class TeamSerializer < ActiveModel::Serializer
  attributes :id, :location, :nickname, :home_venue
  has_one :players
  has_one :games
end
