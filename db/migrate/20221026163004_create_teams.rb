class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :location
      t.string :nickname
      t.string :home_venue
      t.string :image_url

      t.timestamps
    end
  end
end
