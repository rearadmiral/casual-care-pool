class CreateDogs < ActiveRecord::Migration
  def change
    create_table :dogs do |t|
      t.string :name
      t.date :birthdate
      t.string :breed
      t.integer :weight_in_pounds

      t.timestamps null: false
    end
  end
end
