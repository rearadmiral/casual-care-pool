class AddRespondedAtToWalkRequests < ActiveRecord::Migration
  def change
    add_column :walk_requests, :responded_at, :datetime
  end
end
