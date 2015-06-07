class AddPhotoToDogs < ActiveRecord::Migration
  def change
    add_attachment :dogs, :photo
  end
end
