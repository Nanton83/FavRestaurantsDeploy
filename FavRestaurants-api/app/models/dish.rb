class Dish < ApplicationRecord
    belongs_to :restaurant, optional: true
end
