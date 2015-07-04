class WalkRequest < ActiveRecord::Base
  belongs_to :walk
  belongs_to :walker, class: Owner

  validates :walk, presence: true
  validates :walker, presence: true

end
