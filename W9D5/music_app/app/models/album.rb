# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  band_id    :integer          not null
#  live       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
    ALBUM_TYPES = %w(live studio).freeze
    validates :title, :year, :band_id, presence: :true
    validates :live, inclusion: ALBUM_TYPES

    belongs_to :band
    has_many :tracks
end
