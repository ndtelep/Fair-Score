class GameSerializer < ActiveModel::Serializer
  attributes :id, :opposing_team, :venue, :team_id, :win, :home, :completed
end
