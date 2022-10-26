class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.integer :number
      t.integer :points
      t.integer :assists
      t.integer :rebounds
      t.integer :steals
      t.integer :blocks
      t.belongs_to :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
