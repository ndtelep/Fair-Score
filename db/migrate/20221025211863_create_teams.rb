class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :location
      t.string :nickname
      t.string :home_venue
      t.belongs_to :players, null: false, foreign_key: true
      t.belongs_to :games, null: false, foreign_key: true

      t.timestamps
    end
  end
end
