class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :team_id, :points, :assists, :rebounds, :steals, :blocks, :number
end
