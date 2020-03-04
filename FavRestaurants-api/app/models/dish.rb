class Dish < ApplicationRecord
    belongs_to :restaurant, optional: true
    validates :name, :restaurant_id, presence: true
end
