# == Schema Information
#
# Table name: benches
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ApplicationRecord

  def self.in_bounds(bounds)
      # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }
  #... query logic goes here
  ns = [ bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f ].sort
  ew = [ bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f ].sort
  benches = Bench.all.select do |bench|
    bench.lat.between?(*ns) && bench.lng.between?(*ew)
  end

  return benches
  end
end
