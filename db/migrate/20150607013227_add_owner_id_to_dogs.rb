class AddOwnerIdToDogs < ActiveRecord::Migration
  def change
    add_column :dogs, :owner_id, :integer
    add_index :dogs, :owner_id
  end
end
