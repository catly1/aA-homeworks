class House < ApplicationRecord
    validates :address, presence: true

    has_many :residents,
        primary_key: :id,
        foreign_key: :house_id, # Person's house_id
        class_name: :Person
end