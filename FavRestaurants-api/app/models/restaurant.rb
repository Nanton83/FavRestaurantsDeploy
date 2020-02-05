class Restaurant < ApplicationRecord
    has_many :dishes
    accepts_nested_attributes_for :dishes, :allow_destroy => true
end
