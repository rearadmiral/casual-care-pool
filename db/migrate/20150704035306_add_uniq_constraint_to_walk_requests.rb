class AddUniqConstraintToWalkRequests < ActiveRecord::Migration
  def change
    add_index :walk_requests, [:walk_id, :walker_id], unique: true
  end
end
