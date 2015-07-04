class Walk < ActiveRecord::Base
  belongs_to :dog
  belongs_to :walker, class: 'Owner'

  scope :upcoming, lambda { where('requested_at > ?', Time.now.utc) }
  scope :historical, lambda { where('requested_at < ?', Time.now.utc) }

  validates :dog, presence: true
  validates :requested_at, presence: true

end