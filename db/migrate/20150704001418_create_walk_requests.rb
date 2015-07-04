class CreateWalkRequests < ActiveRecord::Migration
  def change
    create_table :walk_requests do |t|
      t.integer :walker_id
      t.integer :walk_id

      t.timestamps null: false
    end
  end
end
