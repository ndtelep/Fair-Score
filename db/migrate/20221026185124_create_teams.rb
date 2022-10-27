class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :location
      t.string :nickname
      t.string :home_venue
      t.string :imageUrl
      t.belongs_to :user

      t.timestamps
    end
  end
end
