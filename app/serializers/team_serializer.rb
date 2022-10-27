class TeamSerializer < ActiveModel::Serializer
  attributes :id, :location, :nickname, :home_venue, :image_url
end
