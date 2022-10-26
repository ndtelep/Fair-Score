class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :opposing_team
      t.string :venue
      t.boolean :win
      t.boolean :home
      t.boolean :completed
      t.belongs_to :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
