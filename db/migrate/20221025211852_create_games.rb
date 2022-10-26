class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :opposing_team
      t.string :venue
      t.integer :team_id
      t.boolean :win
      t.boolean :home
      t.boolean :completed

      t.timestamps
    end
  end
end
