class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.integer :team_id
      t.integer :points
      t.integer :assists
      t.integer :rebounds
      t.integer :steals
      t.integer :blocks
      t.integer :number

      t.timestamps
    end
  end
end