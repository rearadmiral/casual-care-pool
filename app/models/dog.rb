class Dog < ActiveRecord::Base
  has_many :walks
  belongs_to :owner
  has_attached_file :photo,
      styles: { medium: "192x192>",
                thumb: "64x64>" },
      default_url: "/images/:style/missing.png"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/

  validates :owner, presence: true
  validates :birthdate, presence: true
  validates :name, presence: true
end
