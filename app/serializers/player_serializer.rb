class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :number, :points, :assists, :rebounds, :steals, :blocks
  has_one :team
end
