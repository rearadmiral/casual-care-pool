class WalkRequest < ActiveRecord::Base
  belongs_to :walk
  belongs_to :walker, class: Owner

  scope :confirmed, lambda { where.not(responded_at: nil).first }

  validates :walk, presence: true
  validates :walker, presence: true
  validates :walker, uniqueness: { scope: :walk }

  def dog
    walk.dog
  end

  def owner
    dog.owner
  end

  def confirm(walker)
    walk.walker = walker
    touch_responded_at && walk.save
  end

  private

  def touch_responded_at
    self.update_attributes(responded_at: Time.now.utc)
  end

end
