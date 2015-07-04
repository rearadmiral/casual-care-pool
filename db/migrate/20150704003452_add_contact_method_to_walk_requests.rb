class AddContactMethodToWalkRequests < ActiveRecord::Migration
  def change
    add_column :walk_requests, :contact_method, :string
  end
end
