class WalkRequest < ActiveRecord::Base
  belongs_to :walk
  belongs_to :walker, class: Owner

  validates :walk, presence: true
  validates :walker, presence: true
  validates :walker, uniqueness: { scope: :walk }

  def dog
    walk.dog
  end

  def owner
    dog.owner
  end

end
