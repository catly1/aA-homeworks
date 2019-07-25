# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper
COLORS = ["black", "white", "brown", "orange"]
validates :sex, inclusion: { in: %w(M F),
    message: "%{value} is not a valid sex" }

validates :color, inclusion: { in: %w(black white brown orange),
    message: "%{value} is not a valid color" }

    def age
			((Time.zone.now - birth_date.to_s.to_time) / 1.year.seconds).floor
    end

end
