# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  user_id            :integer
#

class Photo < ActiveRecord::Base
  has_attached_file :image, default_url: "seeds/0_:style.jpg", validate_media_type: false,
    styles: { profile_picture: "300x300#", banner:"854x316#"}
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  belongs_to :user
end
