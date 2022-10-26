class GameSerializer < ActiveModel::Serializer
  attributes :id, :opposing_team, :venue, :win, :home, :completed
  has_one :team
end
