class CreateWalks < ActiveRecord::Migration
  def change
    create_table :walks do |t|
      t.string :name
      t.datetime :requested_at
      t.datetime :finished_at
      t.integer :dog_id
      t.integer :walker_id

      t.timestamps null: false
    end
  end
end
