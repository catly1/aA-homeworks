# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  ord        :integer          not null
#  lyrics     :text
#  album_id   :integer          not null
#  regular    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
    validates :title, :ord, :album_id, presence: true

    belongs_to :album
end
